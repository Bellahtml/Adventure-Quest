"use strict";

const activities = [
  { id: "hiking", name: "Pendakian Gunung", type: "Darat", description: "Menapaki jalur pegunungan dan menikmati lanskap dari ketinggian.", location: "Gunung Prau, Jawa Tengah", duration: 12, durationLabel: "1–2 hari", difficulty: "Sulit", cost: 450000, image: "photo-1551632811-561732d1e306", alt: "Pendaki berjalan menyusuri jalur pegunungan", gear: ["Tas daypack", "Air minum", "Makanan ringan", "Pakaian berlapis", "Sepatu trekking", "Kotak P3K", "Senter atau headlamp", "Alat komunikasi"], prep: "Tingkatkan kebugaran secara bertahap dan cari tahu jarak, elevasi, serta aturan jalur melalui pengelola setempat.", safety: "Periksa status jalur dan cuaca resmi. Pertimbangkan pemandu lokal, tetap bersama rombongan, dan berbalik bila kondisi memburuk.", best: "Kondisi jalur dan musim berbeda tiap lokasi. Konfirmasi periode kunjungan yang direkomendasikan kepada pengelola." },
  { id: "camping", name: "Camping", type: "Darat", description: "Menginap di alam terbuka, menikmati suasana malam dan pagi.", location: "Ranca Upas, Jawa Barat", duration: 24, durationLabel: "1–2 hari", difficulty: "Mudah", cost: 250000, image: "photo-1478131143081-80f7f84ca84d", alt: "Tenda di area camping saat senja", gear: ["Tas daypack", "Air minum", "Makanan", "Pakaian hangat", "Sepatu outdoor", "Kotak P3K", "Senter atau headlamp", "Alat komunikasi"], prep: "Pahami fasilitas, aturan api unggun, dan kondisi area berkemah. Pilih perlengkapan tidur yang sesuai cuaca.", safety: "Gunakan lokasi yang diizinkan, simpan makanan dengan aman, dan ikuti aturan pengelola terkait api serta satwa.", best: "Cek prakiraan hujan dan suhu malam. Tanyakan kondisi area dan akses kepada pengelola sebelum berangkat." },
  { id: "trekking", name: "Trekking", type: "Darat", description: "Jelajahi jalur alam dan desa dengan ritme langkahmu sendiri.", location: "Tebing Keraton, Jawa Barat", duration: 5, durationLabel: "3–5 jam", difficulty: "Menengah", cost: 150000, image: "photo-1551632811-561732d1e306", alt: "Para penjelajah berjalan di jalur hijau", gear: ["Tas daypack", "Air minum", "Makanan ringan", "Pakaian sesuai cuaca", "Sepatu trekking", "Kotak P3K", "Topi dan pelindung matahari", "Alat komunikasi"], prep: "Cari tahu jarak dan karakter jalur. Sesuaikan target dengan kemampuan peserta dan atur waktu istirahat.", safety: "Tetap di jalur yang ditandai, beritahu pengelola rencana rute, dan hindari berjalan sendirian.", best: "Berangkat pada jam operasional yang diizinkan; periksa kondisi jalan dan cuaca setempat." },
  { id: "snorkeling", name: "Snorkeling", type: "Air", description: "Mengamati kehidupan bawah laut dari permukaan air yang jernih.", location: "Pulau Menjangan, Bali", duration: 4, durationLabel: "2–4 jam", difficulty: "Mudah", cost: 350000, image: "photo-1518837695005-2083093ee35b", alt: "Air laut biru jernih di kawasan tropis", gear: ["Tas tahan air", "Air minum", "Pakaian renang", "Masker dan snorkel", "Kotak P3K", "Pelindung matahari ramah laut", "Alat komunikasi", "Pelampung sesuai kebutuhan"], prep: "Pilih operator dan perlengkapan yang sesuai ukuran. Pastikan memahami kondisi tubuh dan bisa meminta bantuan.", safety: "Ikuti arahan pemandu dan kondisi perairan. Gunakan pelampung bila diperlukan, jangan menyentuh biota, dan jangan berenang sendiri.", best: "Tanya operator tentang arus, jarak pandang, dan cuaca laut pada hari kegiatan. Kondisi dapat berubah cepat." },
  { id: "diving", name: "Scuba Diving", type: "Air", description: "Mengenal dunia bawah laut bersama operator dan instruktur tersertifikasi.", location: "Tulamben, Bali", duration: 6, durationLabel: "Setengah hari", difficulty: "Sulit", cost: 1200000, image: "photo-1544551763-46a013bb70d5", alt: "Penyelam menjelajahi bawah laut", gear: ["Tas tahan air", "Air minum", "Pakaian renang", "Peralatan selam sesuai instruktur", "Kotak P3K", "Pelindung matahari ramah laut", "Alat komunikasi", "Bukti sertifikasi bila dipersyaratkan"], prep: "Diving memerlukan pelatihan yang sesuai. Sampaikan kondisi kesehatan kepada operator dan ikuti syarat sertifikasi atau program pemula yang tersedia.", safety: "Selam hanya bersama operator dan instruktur kompeten. Ikuti briefing, batas kedalaman, prosedur, serta rekomendasi medis dan keselamatan.", best: "Kelayakan kondisi laut dan aktivitas ditentukan operator pada hari kegiatan. Jangan menyelam bila tidak fit." },
  { id: "rafting", name: "Arung Jeram", type: "Air", description: "Menyusuri aliran sungai dengan perlengkapan dan pemandu operator.", location: "Sungai Ayung, Bali", duration: 4, durationLabel: "2–4 jam", difficulty: "Menengah", cost: 400000, image: "photo-1530866495561-507c9faab2ed", alt: "Aktivitas arung jeram menyusuri sungai", gear: ["Tas tahan air", "Air minum", "Pakaian cepat kering", "Sepatu air", "Kotak P3K operator", "Pelindung matahari", "Alat komunikasi", "Helm dan pelampung dari operator"], prep: "Pilih operator yang dapat menjelaskan peralatan dan prosedurnya. Beri tahu kondisi kesehatan dan ikuti persyaratan usia atau berat badan.", safety: "Gunakan helm dan pelampung yang dipasang benar. Ikuti instruksi pemandu, jangan ikut bila kondisi tidak sesuai, dan jangan mengarungi sendiri.", best: "Status sungai dipengaruhi cuaca dan debit air. Konfirmasi keamanan serta operasional langsung dengan operator." },
  { id: "cycling", name: "Bersepeda Gunung", type: "Darat", description: "Menikmati rute berbukit dengan sepeda dan perlindungan yang sesuai.", location: "Sentul, Jawa Barat", duration: 5, durationLabel: "3–5 jam", difficulty: "Menengah", cost: 300000, image: "photo-1471506480208-91b3a4cc78be", alt: "Pesepeda gunung melintasi jalur alam", gear: ["Tas daypack", "Air minum", "Makanan ringan", "Pakaian olahraga", "Sepatu bersepeda", "Kotak P3K", "Helm dan pelindung sesuai rute", "Alat komunikasi"], prep: "Periksa sepeda, rem, ban, dan kemampuan teknis yang diperlukan untuk rute. Kenali jalur dan titik istirahat.", safety: "Gunakan helm, patuhi aturan jalur, atur kecepatan sesuai kondisi, dan bersepeda bersama teman atau pemandu.", best: "Hindari jalur ketika kondisi licin atau cuaca buruk. Cek status jalur dan kondisi sepeda sebelum berangkat." },
  { id: "waterfall", name: "Eksplorasi Air Terjun", type: "Alam", description: "Berjalan menuju air terjun dan menikmati suasana hutan sekitar.", location: "Curug Cilember, Jawa Barat", duration: 4, durationLabel: "2–4 jam", difficulty: "Mudah", cost: 100000, image: "photo-1432405972618-c60b0225b8f9", alt: "Air terjun mengalir di tengah hutan hijau", gear: ["Tas daypack", "Air minum", "Makanan ringan", "Pakaian ganti", "Sepatu dengan grip baik", "Kotak P3K", "Senter", "Alat komunikasi"], prep: "Cari tahu jarak dan kondisi lintasan. Kenakan alas kaki dengan daya cengkeram baik dan simpan barang elektronik dengan aman.", safety: "Jangan mendekati tepi licin atau berenang di area terlarang. Ikuti batas aman dan instruksi petugas.", best: "Curah hujan dapat memengaruhi debit air serta akses. Verifikasi kondisi terkini kepada pengelola sebelum berkunjung." }
];

const galleryPhotos = [
  { title: "Jalur menuju puncak", category: "Darat", image: "photo-1464822759023-fed622ff2c3b", alt: "Puncak pegunungan diselimuti kabut" },
  { title: "Malam di alam terbuka", category: "Alam", image: "photo-1478131143081-80f7f84ca84d", alt: "Tenda berkemah di tengah alam" },
  { title: "Birunya laut", category: "Air", image: "photo-1518837695005-2083093ee35b", alt: "Ombak laut biru jernih" },
  { title: "Langkah menjelajah", category: "Darat", image: "photo-1551632811-561732d1e306", alt: "Pendaki menjelajah jalur alam" },
  { title: "Dunia bawah air", category: "Air", image: "photo-1544551763-46a013bb70d5", alt: "Pemandangan dunia bawah laut" },
  { title: "Hutan setelah hujan", category: "Alam", image: "photo-1432405972618-c60b0225b8f9", alt: "Air terjun di antara pepohonan hijau" }
];

const STORAGE_KEYS = { checklist: "adventurequest-checklist-v1", plans: "adventurequest-plans-v1" };
const defaultGear = ["Tas daypack", "Air minum", "Makanan ringan", "Pakaian sesuai cuaca", "Sepatu yang sesuai", "Kotak P3K", "Senter atau headlamp", "Alat komunikasi"];
const $ = (selector, root = document) => root.querySelector(selector);
const $$ = (selector, root = document) => Array.from(root.querySelectorAll(selector));
const escapeHtml = value => String(value).replace(/[&<>"']/g, character => ({
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;",
  "'": "&#39;"
})[character]);
const safeRead = (key, fallback) => {
  try {
    const value = localStorage.getItem(key);
    return value ? JSON.parse(value) : fallback;
  } catch (error) {
    console.error(`Tidak dapat membaca penyimpanan ${key}:`, error);
    return fallback;
  }
};
const safeWrite = (key, value) => {
  try {
    localStorage.setItem(key, JSON.stringify(value));
    return true;
  } catch (error) {
    console.error(`Tidak dapat menyimpan data ${key}:`, error);
    return false;
  }
};
const rupiah = value => new Intl.NumberFormat("id-ID", { style: "currency", currency: "IDR", maximumFractionDigits: 0 }).format(value);
const photoUrl = (id, width = 900) => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${width}&q=82`;

function renderActivityTypes() {
  const types = [...new Set(activities.map(activity => activity.type))];
  $("#type-filter").insertAdjacentHTML("beforeend", types.map(type => `<option value="${type}">${type}</option>`).join(""));
  const options = activities.map(({ id, name }) => `<option value="${id}">${name}</option>`).join("");
  $("#gear-activity").innerHTML = options;
  $("#plan-activity").innerHTML = `<option value="">Pilih aktivitas</option>${options}`;
}

function renderActivities(list = activities) {
  const grid = $("#activity-grid");
  $("#activity-count").textContent = `Menampilkan ${list.length} dari ${activities.length} aktivitas`;
  if (!list.length) {
    grid.innerHTML = '<div class="empty-state">Belum ada aktivitas yang cocok. Coba ubah atau atur ulang filternya.</div>';
    return;
  }
  grid.innerHTML = list.map((activity, index) => `
    <article class="activity-card">
      <div class="card-image"><img src="${photoUrl(activity.image, 700)}" alt="${activity.alt}" loading="lazy"><span class="difficulty-badge" data-level="${activity.difficulty}">${activity.difficulty}</span><span class="card-number">${String(index + 1).padStart(2, "0")} / 08</span></div>
      <div class="card-body"><p class="card-type">${activity.type} / Outdoor</p><h3>${activity.name}</h3><p class="card-description">${activity.description}</p>
        <div class="card-meta"><span>◷ ${activity.durationLabel}</span><span>Mulai ${rupiah(activity.cost)}</span></div>
        <div class="card-footer"><span class="card-location">⌖ ${activity.location}</span><button class="card-link" type="button" data-detail="${activity.id}">Lihat panduan <span>↗</span></button></div>
      </div>
    </article>`).join("");
}

function filterActivities() {
  const query = $("#activity-search").value.trim().toLocaleLowerCase("id");
  const type = $("#type-filter").value;
  const difficulty = $("#difficulty-filter").value;
  const maxDuration = Number($("#duration-filter").value);
  const maxCost = Number($("#cost-filter").value);
  renderActivities(activities.filter(item => {
    const matchesText = !query || `${item.name} ${item.type} ${item.location} ${item.description}`.toLocaleLowerCase("id").includes(query);
    const matchesDuration = !maxDuration || (maxDuration === 24 ? item.duration >= 24 : item.duration <= maxDuration);
    return matchesText && (!type || item.type === type) && (!difficulty || item.difficulty === difficulty) && matchesDuration && (!maxCost || item.cost <= maxCost);
  }));
}

function showActivityDetail(id) {
  const item = activities.find(activity => activity.id === id);
  if (!item) return;
  const detail = $("#activity-detail");
  detail.innerHTML = `
    <div class="detail-hero"><img src="${photoUrl(item.image, 1200)}" alt="${item.alt}"><div class="detail-title-wrap"><p class="eyebrow">${item.type} / ${item.difficulty}</p><h2 id="detail-title">${item.name}</h2></div></div>
    <div class="detail-content"><p class="detail-description">${item.description}</p>
      <div class="detail-facts"><span>⌖ ${item.location}</span><span>◷ ${item.durationLabel}</span><span>Estimasi ${rupiah(item.cost)} / orang</span><span>${item.difficulty}</span></div>
      <div class="detail-columns"><section><h3>Perlengkapan awal</h3><ul>${item.gear.map(gear => `<li>${gear}</li>`).join("")}</ul></section><section><h3>Persiapan fisik & kegiatan</h3><p>${item.prep}</p></section><section><h3>Panduan keselamatan</h3><p>${item.safety}</p></section><section><h3>Waktu & kondisi</h3><p>${item.best}</p></section></div>
      <p class="detail-warning"><strong>Catatan:</strong> Estimasi biaya, kondisi lokasi, cuaca, dan persyaratan keselamatan dapat berubah. Verifikasi langsung kepada pengelola atau operator sebelum melakukan kegiatan.</p>
      <button class="button button-orange add-to-plan" type="button" data-plan-activity="${item.id}">Masukkan ke rencana <span aria-hidden="true">↗</span></button>
    </div>`;
  $("#activity-dialog").showModal();
  document.body.classList.add("dialog-open");
}

function checklistState() {
  const stored = safeRead(STORAGE_KEYS.checklist, {});
  return stored && typeof stored === "object" ? stored : {};
}

function renderChecklist() {
  const activity = activities.find(item => item.id === $("#gear-activity").value) || activities[0];
  const saved = checklistState()[activity.id];
  const checked = Array.isArray(saved) ? saved : [];
  $("#gear-list").innerHTML = activity.gear.map((item, index) => {
    const isChecked = checked.includes(item);
    return `<label class="gear-item${isChecked ? " is-checked" : ""}"><input type="checkbox" data-gear="${index}" ${isChecked ? "checked" : ""}><span>${item}</span></label>`;
  }).join("");
  updateGearProgress();
}

function updateGearProgress() {
  const items = $$(".gear-item input");
  const checkedCount = items.filter(input => input.checked).length;
  $("#gear-progress").textContent = `${checkedCount} dari ${items.length} perlengkapan ditandai`;
}

function renderPlannerGear() {
  const selected = $("#plan-activity").value;
  const activity = activities.find(item => item.id === selected);
  const list = activity ? activity.gear : defaultGear;
  $("#planner-gear-options").innerHTML = list.map((item, index) => `<label class="planner-gear-option"><input type="checkbox" value="${item}" id="plan-gear-${index}"><span>${item}</span></label>`).join("");
}

let currentStep = 1;
function setStep(step) {
  currentStep = step;
  $$(".form-step").forEach(section => section.classList.toggle("is-active", Number(section.dataset.step) === step));
  $$("[data-step-indicator]").forEach(indicator => {
    const number = Number(indicator.dataset.stepIndicator);
    indicator.classList.toggle("is-active", number === step);
    indicator.classList.toggle("is-done", number < step);
  });
  $("#planner-status").textContent = "";
}

function validateStepOne() {
  const errors = {
    activity: !$("#plan-activity").value ? "Pilih aktivitas terlebih dahulu." : "",
    location: !$("#plan-location").value.trim() ? "Masukkan lokasi tujuan." : "",
    date: !$("#plan-date").value ? "Pilih tanggal rencana." : ($("#plan-date").value < new Date().toISOString().slice(0, 10) ? "Tanggal tidak boleh di masa lalu." : ""),
    people: !$("#plan-people").value || Number($("#plan-people").value) < 1 || Number($("#plan-people").value) > 50 ? "Jumlah peserta harus 1–50 orang." : ""
  };
  Object.entries(errors).forEach(([key, message]) => { $(`#error-${key}`).textContent = message; });
  return Object.values(errors).every(message => !message);
}

function renderPlanSummary() {
  const activity = activities.find(item => item.id === $("#plan-activity").value);
  const gear = $$("#planner-gear-options input:checked").map(input => input.value);
  const date = new Date(`${$("#plan-date").value}T00:00:00`).toLocaleDateString("id-ID", { dateStyle: "long" });
  const rows = [
    ["Aktivitas", activity ? activity.name : ""],
    ["Lokasi", $("#plan-location").value.trim()],
    ["Tanggal", date],
    ["Peserta", `${$("#plan-people").value} orang`],
    ["Perlengkapan", gear.length ? gear.join(", ") : "Belum ada yang dipilih"]
  ];
  $("#plan-summary").innerHTML = rows.map(([label, value]) => `<div class="summary-row"><span>${label}</span><strong>${escapeHtml(value)}</strong></div>`).join("");
}

function getPlans() {
  const plans = safeRead(STORAGE_KEYS.plans, []);
  return Array.isArray(plans) ? plans.filter(plan => plan && typeof plan === "object") : [];
}

function renderSavedPlans() {
  const plans = getPlans();
  const list = $("#saved-plans-list");
  if (!plans.length) {
    list.innerHTML = '<p class="no-plans">Belum ada rencana tersimpan di perangkat ini.</p>';
    return;
  }
  list.innerHTML = plans.map(plan => `<article class="saved-plan"><div><strong>${escapeHtml(plan.activityName)}</strong><small>${escapeHtml(plan.location)} · ${escapeHtml(plan.dateLabel)} · ${escapeHtml(plan.people)} peserta</small></div><button class="delete-plan" type="button" data-delete-plan="${escapeHtml(plan.id)}" aria-label="Hapus rencana ${escapeHtml(plan.activityName)}">Hapus</button></article>`).join("");
}

function estimateCosts() {
  const fields = ["transport", "entry", "food", "gear", "extra"];
  const values = fields.map(field => Math.max(0, Number($(`#cost-${field}`).value) || 0));
  const participants = Math.max(1, Number($("#cost-people").value) || 1);
  const total = values.reduce((sum, value) => sum + value, 0);
  $("#total-estimate").textContent = `Total kelompok: ${rupiah(total)}`;
  $("#per-person-total").textContent = rupiah(Math.ceil(total / participants));
}

function renderGallery(filter = "Semua") {
  const visible = galleryPhotos.filter(photo => filter === "Semua" || photo.category === filter);
  $("#gallery-grid").innerHTML = visible.map(photo => `<button class="gallery-item" type="button" data-lightbox="${photo.title}" data-image="${photoUrl(photo.image, 1500)}" data-alt="${photo.alt}"><img src="${photoUrl(photo.image, 800)}" alt="${photo.alt}" loading="lazy"><span class="gallery-caption">${photo.title} ↗</span></button>`).join("");
}

let toastTimeout;
function showToast(message) {
  const toast = $("#toast");
  toast.textContent = message;
  toast.classList.add("is-visible");
  clearTimeout(toastTimeout);
  toastTimeout = setTimeout(() => toast.classList.remove("is-visible"), 3000);
}

function init() {
  renderActivityTypes();
  renderActivities();
  renderChecklist();
  renderPlannerGear();
  renderSavedPlans();
  estimateCosts();
  renderGallery();

  const menuToggle = $(".menu-toggle");
  const navLinks = $(".nav-links");
  menuToggle.addEventListener("click", () => {
    const open = menuToggle.getAttribute("aria-expanded") !== "true";
    menuToggle.setAttribute("aria-expanded", String(open));
    menuToggle.setAttribute("aria-label", open ? "Tutup navigasi" : "Buka navigasi");
    navLinks.classList.toggle("is-open", open);
  });
  navLinks.addEventListener("click", event => {
    if (event.target.closest("a")) {
      menuToggle.setAttribute("aria-expanded", "false");
      menuToggle.setAttribute("aria-label", "Buka navigasi");
      navLinks.classList.remove("is-open");
    }
  });
  $("#activity-search").addEventListener("input", filterActivities);
  ["type-filter", "difficulty-filter", "duration-filter", "cost-filter"].forEach(id => $(`#${id}`).addEventListener("change", filterActivities));
  $("#reset-filters").addEventListener("click", () => {
    $("#activity-search").value = "";
    ["type-filter", "difficulty-filter", "duration-filter", "cost-filter"].forEach(id => { $(`#${id}`).value = ""; });
    filterActivities();
  });
  $("#activity-grid").addEventListener("click", event => {
    const button = event.target.closest("[data-detail]");
    if (button) showActivityDetail(button.dataset.detail);
  });
  $("#activity-detail").addEventListener("click", event => {
    const button = event.target.closest("[data-plan-activity]");
    if (!button) return;
    $("#plan-activity").value = button.dataset.planActivity;
    renderPlannerGear();
    $("#activity-dialog").close();
    document.body.classList.remove("dialog-open");
    $("#planner").scrollIntoView({ behavior: "smooth" });
    showToast("Aktivitas ditambahkan ke formulir rencana. Lengkapi detailnya, ya.");
  });
  $$(".detail-dialog, .lightbox-dialog").forEach(dialog => {
    dialog.addEventListener("close", () => document.body.classList.remove("dialog-open"));
    dialog.addEventListener("click", event => {
      if (event.target === dialog) dialog.close();
    });
    $(".dialog-close", dialog).addEventListener("click", () => dialog.close());
  });
  $("#gear-activity").addEventListener("change", renderChecklist);
  $("#gear-list").addEventListener("change", event => {
    if (!event.target.matches("input[type=checkbox]")) return;
    const activityId = $("#gear-activity").value;
    const state = checklistState();
    const activity = activities.find(item => item.id === activityId);
    const item = activity.gear[Number(event.target.dataset.gear)];
    const savedItems = Array.isArray(state[activityId]) ? state[activityId] : [];
    const current = new Set(savedItems);
    if (event.target.checked) current.add(item); else current.delete(item);
    state[activityId] = [...current];
    if (!safeWrite(STORAGE_KEYS.checklist, state)) showToast("Checklist tidak dapat disimpan. Periksa pengaturan penyimpanan browser.");
    event.target.closest(".gear-item").classList.toggle("is-checked", event.target.checked);
    updateGearProgress();
  });
  $("#plan-activity").addEventListener("change", renderPlannerGear);
  $$(".form-next").forEach(button => button.addEventListener("click", () => {
    if (currentStep === 1 && !validateStepOne()) return;
    if (currentStep === 2) {
      if (!$$("#planner-gear-options input:checked").length) {
        $("#error-gear").textContent = "Pilih setidaknya satu perlengkapan, atau kembali untuk menyesuaikan aktivitas.";
        return;
      }
      $("#error-gear").textContent = "";
      renderPlanSummary();
    }
    setStep(Math.min(3, currentStep + 1));
  }));
  $$(".form-back").forEach(button => button.addEventListener("click", () => setStep(Math.max(1, currentStep - 1))));
  $("#planner-form").addEventListener("submit", event => {
    event.preventDefault();
    if (currentStep !== 3) return;
    const activity = activities.find(item => item.id === $("#plan-activity").value);
    const plans = getPlans();
    const plan = {
      id: `${Date.now()}-${Math.random().toString(36).slice(2, 8)}`,
      activityId: activity.id,
      activityName: activity.name,
      location: $("#plan-location").value.trim(),
      date: $("#plan-date").value,
      dateLabel: new Date(`${$("#plan-date").value}T00:00:00`).toLocaleDateString("id-ID", { dateStyle: "medium" }),
      people: Number($("#plan-people").value),
      gear: $$("#planner-gear-options input:checked").map(input => input.value)
    };
    if (!safeWrite(STORAGE_KEYS.plans, [plan, ...plans])) {
      $("#planner-status").textContent = "Rencana gagal disimpan. Periksa apakah penyimpanan browser tersedia.";
      $("#planner-status").style.color = "#b43e2d";
      return;
    }
    renderSavedPlans();
    $("#planner-status").textContent = "Rencana tersimpan di browser pada perangkat ini.";
    $("#planner-status").style.color = "";
    showToast("Rencana petualangan tersimpan.");
    $("#planner-form").reset();
    $("#plan-people").value = "2";
    $("#plan-date").min = new Date().toISOString().slice(0, 10);
    renderPlannerGear();
    setStep(1);
  });
  $("#plan-date").min = new Date().toISOString().slice(0, 10);
  $("#saved-plans-list").addEventListener("click", event => {
    const button = event.target.closest("[data-delete-plan]");
    if (!button) return;
    const plans = getPlans().filter(plan => plan.id !== button.dataset.deletePlan);
    if (!safeWrite(STORAGE_KEYS.plans, plans)) {
      showToast("Rencana tidak dapat dihapus. Periksa pengaturan penyimpanan browser.");
      return;
    }
    renderSavedPlans();
    showToast("Rencana dihapus dari perangkat ini.");
  });
  $("#cost-form").addEventListener("input", estimateCosts);
  $$(".gallery-filter").forEach(button => button.addEventListener("click", () => {
    $$(".gallery-filter").forEach(filter => filter.classList.toggle("is-active", filter === button));
    renderGallery(button.dataset.galleryFilter);
  }));
  $("#gallery-grid").addEventListener("click", event => {
    const button = event.target.closest("[data-lightbox]");
    if (!button) return;
    $("#lightbox-image").src = button.dataset.image;
    $("#lightbox-image").alt = button.dataset.alt;
    $("#lightbox-caption").textContent = button.dataset.lightbox;
    $("#lightbox-dialog").showModal();
    document.body.classList.add("dialog-open");
  });
}

document.addEventListener("DOMContentLoaded", init);
