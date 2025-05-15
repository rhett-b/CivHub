let fullData = [];

function renderProtocols(data) {
  const container = document.getElementById('protocols');
  container.innerHTML = '';
  if (data.length === 0) {
    container.innerHTML = '<p>No protocols match your criteria.</p>';
    return;
  }

  data.forEach(entry => {
    const el = document.createElement('div');
    el.className = 'protocol';

    const steps = entry.steps?.map(step => `<li><strong>${step.label}:</strong> ${step.description}</li>`).join('') || '';
    const roles = entry.participant_roles?.map(r => `<li>${r}</li>`).join('') || '';
    const tools = entry.recommended_tools?.map(t => `<li>${t}</li>`).join('') || '';

    el.innerHTML = `
      <h2>${entry.title}</h2>
      <p class="meta"><strong>Category:</strong> ${entry.category.join(', ')}</p>
      <p class="meta"><strong>Author:</strong> ${entry.author} &nbsp;|&nbsp; <strong>Schema:</strong> ${entry.schema_version}</p>
      <p class="meta"><strong>Last Updated:</strong> ${entry.last_updated}</p>
      <p><a href="https://github.com/rhett-b/CivHub/blob/main/${entry.file_path}" target="_blank">View Protocol JSON</a></p>
      <button class="copy-btn" data-url="https://raw.githubusercontent.com/rhett-b/CivHub/main/${entry.file_path}">📋 Copy JSON URL</button>
      <button class="toggle-btn">➕ Show Details</button>
      <div class="details" style="display: none;">
        <p><strong>Steps:</strong></p><ul>${steps}</ul>
        <p><strong>Participant Roles:</strong></p><ul>${roles}</ul>
        <p><strong>Recommended Tools:</strong></p><ul>${tools}</ul>
      </div>
    `;
    container.appendChild(el);
  });

  document.querySelectorAll('.toggle-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const details = btn.nextElementSibling;
      const expanded = details.style.display === 'block';
      details.style.display = expanded ? 'none' : 'block';
      btn.textContent = expanded ? '➕ Show Details' : '➖ Hide Details';
    });
  });

  document.querySelectorAll('.copy-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      navigator.clipboard.writeText(btn.dataset.url).then(() => {
        btn.textContent = '✅ Copied!';
        setTimeout(() => btn.textContent = '📋 Copy JSON URL', 2000);
      });
    });
  });
}

function filterAndSort() {
  const search = document.getElementById('search').value.toLowerCase();
  const sort = document.getElementById('sort').value;
  const selectedCategory = document.getElementById('category').value;

  let filtered = fullData.filter(p => {
    const matchSearch = p.title.toLowerCase().includes(search);
    const matchCategory = !selectedCategory || p.category.includes(selectedCategory);
    return matchSearch && matchCategory;
  });

  if (sort === 'title') {
    filtered.sort((a, b) => a.title.localeCompare(b.title));
  } else if (sort === 'updated') {
    filtered.sort((a, b) => new Date(b.last_updated) - new Date(a.last_updated));
  }

  renderProtocols(filtered);
}

fetch('https://raw.githubusercontent.com/rhett-b/CivHub/main/registry_index.json')
  .then(res => res.json())
  .then(data => {
    fullData = data;
    const container = document.getElementById('filters');

    // Build search + sort UI
    container.innerHTML = `
      <input type="text" id="search" placeholder="Search by title..." />
      <select id="sort">
        <option value="updated">Sort: Last Updated</option>
        <option value="title">Sort: A–Z</option>
      </select>
      <select id="category">
        <option value="">Filter: All Categories</option>
      </select>
    `;

    // Build category filters
    const allCategories = [...new Set(data.flatMap(p => p.category))].sort();
    const catDropdown = document.getElementById('category');
    allCategories.forEach(cat => {
      const opt = document.createElement('option');
      opt.value = cat;
      opt.textContent = cat;
      catDropdown.appendChild(opt);
    });

    document.getElementById('search').addEventListener('input', filterAndSort);
    document.getElementById('sort').addEventListener('change', filterAndSort);
    document.getElementById('category').addEventListener('change', filterAndSort);

    renderProtocols(fullData);
  })
  .catch(err => {
    document.getElementById('protocols').innerHTML = '<p>Error loading registry.</p>';
    console.error(err);
  });
