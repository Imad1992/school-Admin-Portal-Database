const STORAGE_KEY = "northstar-school-portal-students";
const ADMIN_STORAGE_KEY = "northstar-school-portal-admins";

const initialStudents = [
  {
    name: "Maya Johnson",
    id: "NS-2048",
    className: "Grade 10 - A",
    guardian: "Elena Johnson",
    attendance: 97,
    status: "Active",
    feeStatus: "Paid",
    notes: "Prefect candidate and math club member."
  },
  {
    name: "Daniel Okafor",
    id: "NS-2051",
    className: "Grade 9 - B",
    guardian: "Chinedu Okafor",
    attendance: 88,
    status: "Probation",
    feeStatus: "Pending",
    notes: "Needs attendance follow-up and library clearance."
  },
  {
    name: "Aisha Patel",
    id: "NS-2060",
    className: "Grade 12 - C",
    guardian: "Rina Patel",
    attendance: 93,
    status: "Graduating",
    feeStatus: "Paid",
    notes: "University application pack submitted."
  },
  {
    name: "Noah Williams",
    id: "NS-2072",
    className: "Grade 8 - A",
    guardian: "Megan Williams",
    attendance: 84,
    status: "Active",
    feeStatus: "Overdue",
    notes: "Fee reminder sent to guardian."
  },
  {
    name: "Sofia Garcia",
    id: "NS-2078",
    className: "Grade 11 - B",
    guardian: "Carlos Garcia",
    attendance: 96,
    status: "Active",
    feeStatus: "Paid",
    notes: "Representing the school at debate finals."
  },
  {
    name: "Ethan Brown",
    id: "NS-2083",
    className: "Grade 9 - A",
    guardian: "Laura Brown",
    attendance: 79,
    status: "Probation",
    feeStatus: "Pending",
    notes: "Behavior note logged by discipline office."
  }
];

const classes = [
  { name: "Grade 8 - A", count: 28, teacher: "Ms. Torres" },
  { name: "Grade 9 - A", count: 31, teacher: "Mr. Chen" },
  { name: "Grade 9 - B", count: 30, teacher: "Ms. Okoye" },
  { name: "Grade 10 - A", count: 27, teacher: "Mr. Adams" },
  { name: "Grade 11 - B", count: 26, teacher: "Ms. Singh" },
  { name: "Grade 12 - C", count: 24, teacher: "Dr. Reed" }
];

const activity = [
  {
    title: "Attendance report finalized",
    body: "Weekly attendance audit completed for all homerooms with two exceptions flagged for review."
  },
  {
    title: "Admissions request approved",
    body: "New transfer student documents were verified and the record has been added to the roster."
  },
  {
    title: "Fee reconciliation updated",
    body: "Payment status synced with finance and overdue reminders were queued for guardians."
  }
];

const announcements = [
  {
    title: "Parent conference week starts Monday",
    body: "Book slots through the admin desk. Homeroom teachers should confirm attendance lists by Friday."
  },
  {
    title: "Library reading challenge",
    body: "Students who complete five books this month will be featured on the notice board and website."
  },
  {
    title: "Sports day rehearsal",
    body: "All class captains should report to the field at 1:30 PM for coordination and logistics."
  }
];

const schedule = [
  { time: "08:00", title: "Morning assembly", detail: "Main hall attendance and announcements" },
  { time: "10:15", title: "Grade 10 math exam", detail: "Rooms B3 - B6" },
  { time: "12:30", title: "Guidance counseling", detail: "Student support office" },
  { time: "15:00", title: "Staff briefing", detail: "Administration block conference room" }
];

const staff = [
  { name: "Dr. Helen Reed", role: "Principal", focus: "Policy and school leadership" },
  { name: "Ms. Priya Singh", role: "Vice Principal", focus: "Academic operations" },
  { name: "Mr. Daniel Chen", role: "Head of Mathematics", focus: "Curriculum and assessments" },
  { name: "Ms. Rita Okoye", role: "Student Affairs", focus: "Discipline and wellbeing" }
];

const initialAdmins = [
  {
    fullName: "Sarah Khan",
    username: "skhan",
    email: "sarah.khan@northstar.edu",
    role: "Super Admin",
    status: "Active",
    permissions: "Students, fees, reports, system settings",
    lastLogin: "Today, 08:14 AM"
  },
  {
    fullName: "Michael Reed",
    username: "mreed",
    email: "michael.reed@northstar.edu",
    role: "Registrar",
    status: "Active",
    permissions: "Admissions, student records, attendance",
    lastLogin: "Today, 09:02 AM"
  },
  {
    fullName: "Grace Miller",
    username: "gmiller",
    email: "grace.miller@northstar.edu",
    role: "Finance Officer",
    status: "Pending",
    permissions: "Fees, receipts, balance reports",
    lastLogin: "Yesterday, 04:30 PM"
  }
];

const state = {
  students: loadStudents(),
  admins: loadAdmins(),
  auditLog: [{ action: "System ready", detail: "Dashboard loaded successfully", time: "Just now" }],
  filters: {
    query: "",
    className: "all",
    status: "all"
  },
  attendanceOnly: false,
  editIndex: null,
  detailStudentId: null,
  adminEditIndex: null,
  adminFilters: {
    query: "",
    role: "all"
  }
};

const dom = {
  table: document.getElementById("studentTable"),
  classList: document.getElementById("classList"),
  feeList: document.getElementById("feeList"),
  activityFeed: document.getElementById("activityFeed"),
  announcementList: document.getElementById("announcementList"),
  scheduleList: document.getElementById("scheduleList"),
  staffGrid: document.getElementById("staffGrid"),
  classFilter: document.getElementById("classFilter"),
  statusFilter: document.getElementById("statusFilter"),
  searchInput: document.getElementById("searchInput"),
  classOptions: document.getElementById("classOptions"),
  studentModal: document.getElementById("studentModal"),
  detailModal: document.getElementById("detailModal"),
  studentForm: document.getElementById("studentForm"),
  modalTitle: document.getElementById("modalTitle"),
  detailTitle: document.getElementById("detailTitle"),
  detailAvatar: document.getElementById("detailAvatar"),
  detailName: document.getElementById("detailName"),
  detailMeta: document.getElementById("detailMeta"),
  detailStatusBadge: document.getElementById("detailStatusBadge"),
  detailFeeBadge: document.getElementById("detailFeeBadge"),
  detailId: document.getElementById("detailId"),
  detailAttendance: document.getElementById("detailAttendance"),
  detailGuardian: document.getElementById("detailGuardian"),
  detailClass: document.getElementById("detailClass"),
  detailNotes: document.getElementById("detailNotes"),
  totalStudents: document.getElementById("totalStudents"),
  activeClasses: document.getElementById("activeClasses"),
  attendanceRate: document.getElementById("attendanceRate"),
  pendingFees: document.getElementById("pendingFees"),
  alertCount: document.getElementById("alertCount"),
  adminTable: document.getElementById("adminTable"),
  adminSearchInput: document.getElementById("adminSearchInput"),
  adminRoleFilter: document.getElementById("adminRoleFilter"),
  adminRoleSelect: document.getElementById("adminRoleSelect"),
  adminModal: document.getElementById("adminModal"),
  adminForm: document.getElementById("adminForm"),
  adminModalTitle: document.getElementById("adminModalTitle"),
  adminTotalCount: document.getElementById("adminTotalCount"),
  adminActiveCount: document.getElementById("adminActiveCount"),
  adminRoleCount: document.getElementById("adminRoleCount"),
  auditList: document.getElementById("auditList")
};

function initials(name) {
  return name
    .split(" ")
    .slice(0, 2)
    .map((part) => part[0])
    .join("")
    .toUpperCase();
}

function loadStudents() {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (!stored) return [...initialStudents];

    const parsed = JSON.parse(stored);
    return Array.isArray(parsed) && parsed.length ? parsed : [...initialStudents];
  } catch {
    return [...initialStudents];
  }
}

function loadAdmins() {
  try {
    const stored = localStorage.getItem(ADMIN_STORAGE_KEY);
    if (!stored) return [...initialAdmins];

    const parsed = JSON.parse(stored);
    return Array.isArray(parsed) && parsed.length ? parsed : [...initialAdmins];
  } catch {
    return [...initialAdmins];
  }
}

function saveStudents() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state.students));
}

function saveAdmins() {
  localStorage.setItem(ADMIN_STORAGE_KEY, JSON.stringify(state.admins));
}

function addAuditEntry(action, detail) {
  state.auditLog.unshift({
    action,
    detail,
    time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
  });
  state.auditLog = state.auditLog.slice(0, 8);
  renderAuditTrail();
}

function getFilteredStudents() {
  return state.students.filter((student) => {
    const matchesQuery = [student.name, student.className, student.guardian, student.id]
      .join(" ")
      .toLowerCase()
      .includes(state.filters.query.toLowerCase());

    const matchesClass = state.filters.className === "all" || student.className === state.filters.className;
    const matchesStatus = state.filters.status === "all" || student.status === state.filters.status;
    const matchesAttendance = !state.attendanceOnly || student.attendance < 85;

    return matchesQuery && matchesClass && matchesStatus && matchesAttendance;
  });
}

function statusClass(status) {
  return `status-chip status-${status.toLowerCase()}`;
}

function feeClass(feeStatus) {
  return `fee-chip fee-${feeStatus.toLowerCase()}`;
}

function adminStatusClass(status) {
  return `status-chip status-${status.toLowerCase()}`;
}

function adminStatusTone(status) {
  if (status === "Active") return "status-active";
  if (status === "Pending") return "status-probation";
  return "status-graduating";
}

function adminAvatarColor(name) {
  const palette = ["#0f766e", "#1d4ed8", "#7c3aed", "#b45309"];
  const index = name.length % palette.length;
  return palette[index];
}

function attendanceColor(attendance) {
  if (attendance >= 92) return "#166534";
  if (attendance >= 85) return "#9a6700";
  return "#b91c1c";
}

function renderStats() {
  const total = state.students.length;
  const attendanceAverage = Math.round(
    state.students.reduce((sum, student) => sum + student.attendance, 0) / Math.max(total, 1)
  );
  const pendingFees = state.students.filter((student) => student.feeStatus !== "Paid").length;
  const alerts = state.students.filter(
    (student) => student.attendance < 85 || student.feeStatus !== "Paid" || student.status === "Probation"
  ).length;

  dom.totalStudents.textContent = total;
  dom.activeClasses.textContent = classes.length;
  dom.attendanceRate.textContent = `${attendanceAverage}%`;
  dom.pendingFees.textContent = pendingFees;
  dom.alertCount.textContent = `${alerts} flagged`;
}

function renderClassFilters() {
  const options = classes
    .map((group) => `<option value="${group.name}">${group.name}</option>`)
    .join("");

  dom.classFilter.insertAdjacentHTML("beforeend", options);
  dom.classOptions.innerHTML = options;
}

function renderAdminRoleFilters() {
  const roles = [...new Set(state.admins.map((admin) => admin.role))];
  const options = roles.map((role) => `<option value="${role}">${role}</option>`).join("");
  dom.adminRoleFilter.innerHTML = `<option value="all">All roles</option>${options}`;
  dom.adminRoleSelect.innerHTML = options || `<option value="Super Admin">Super Admin</option>`;
}

function renderClassCards() {
  dom.classList.innerHTML = classes
    .map(
      (group) => `
        <article class="class-card">
          <strong>${group.name}</strong>
          <p>${group.count} learners</p>
          <p>Lead teacher: ${group.teacher}</p>
        </article>
      `
    )
    .join("");
}

function renderFeeCards() {
  const entries = state.students
    .filter((student) => student.feeStatus !== "Paid")
    .slice(0, 4)
    .map(
      (student) => `
        <article class="fee-card">
          <strong>${student.name}</strong>
          <p>${student.className}</p>
          <span class="${feeClass(student.feeStatus)}">${student.feeStatus}</span>
        </article>
      `
    )
    .join("");

  dom.feeList.innerHTML = entries || '<article class="fee-card"><strong>No outstanding balances</strong><p>All student fee records are current.</p></article>';
}

function renderActivity() {
  dom.activityFeed.innerHTML = activity
    .map(
      (item) => `
        <article class="activity-card">
          <strong>${item.title}</strong>
          <p>${item.body}</p>
        </article>
      `
    )
    .join("");
}

function renderAnnouncements() {
  dom.announcementList.innerHTML = announcements
    .map(
      (item) => `
        <article class="announcement-card">
          <strong>${item.title}</strong>
          <p>${item.body}</p>
        </article>
      `
    )
    .join("");
}

function renderSchedule() {
  dom.scheduleList.innerHTML = schedule
    .map(
      (item) => `
        <article class="schedule-item">
          <div class="schedule-time">${item.time}</div>
          <div>
            <strong>${item.title}</strong>
            <p>${item.detail}</p>
          </div>
        </article>
      `
    )
    .join("");
}

function renderStaff() {
  dom.staffGrid.innerHTML = staff
    .map(
      (member) => `
        <article class="staff-card">
          <div class="avatar large">${initials(member.name)}</div>
          <div>
            <strong>${member.name}</strong>
            <p>${member.role}</p>
            <span>${member.focus}</span>
          </div>
        </article>
      `
    )
    .join("");
}

function getFilteredAdmins() {
  return state.admins.filter((admin) => {
    const matchesQuery = [admin.fullName, admin.username, admin.role, admin.email]
      .join(" ")
      .toLowerCase()
      .includes(state.adminFilters.query.toLowerCase());
    const matchesRole = state.adminFilters.role === "all" || admin.role === state.adminFilters.role;
    return matchesQuery && matchesRole;
  });
}

function renderAdminSummary() {
  dom.adminTotalCount.textContent = state.admins.length;
  dom.adminActiveCount.textContent = state.admins.filter((admin) => admin.status === "Active").length;
  dom.adminRoleCount.textContent = new Set(state.admins.map((admin) => admin.role)).size;
}

function renderAdminTable() {
  const admins = getFilteredAdmins();
  const template = document.getElementById("adminRowTemplate");

  if (!admins.length) {
    dom.adminTable.innerHTML = `
      <tr>
        <td colspan="7">
          <div class="empty-state">No admin accounts match the current filters.</div>
        </td>
      </tr>
    `;
    return;
  }

  dom.adminTable.innerHTML = "";
  admins.forEach((admin) => {
    const row = template.content.cloneNode(true);
    row.querySelector(".admin-avatar").textContent = initials(admin.fullName);
    row.querySelector(".admin-avatar").style.background = `linear-gradient(135deg, ${adminAvatarColor(admin.fullName)}, #2563eb)`;
    row.querySelector(".admin-name").textContent = admin.fullName;
    row.querySelector(".admin-username").textContent = `@${admin.username}`;
    row.querySelector(".admin-role").textContent = admin.role;
    row.querySelector(".admin-email").textContent = admin.email;
    row.querySelector(".admin-permissions").textContent = admin.permissions;
    const statusBadge = row.querySelector(".admin-status");
    statusBadge.innerHTML = `<span class="${adminStatusClass(admin.status)} ${adminStatusTone(admin.status)}">${admin.status}</span>`;
    row.querySelector(".admin-login").textContent = admin.lastLogin;

    row.querySelector(".edit-admin-button").addEventListener("click", () => openAdminModal(admin));
    row.querySelector(".remove-admin-button").addEventListener("click", () => removeAdmin(admin.username));
    row.addEventListener("dblclick", () => openAdminModal(admin));

    dom.adminTable.appendChild(row);
  });
}

function renderAuditTrail() {
  dom.auditList.innerHTML = state.auditLog
    .map(
      (entry) => `
        <article class="audit-card">
          <strong>${entry.action}</strong>
          <p>${entry.detail}</p>
          <span>${entry.time}</span>
        </article>
      `
    )
    .join("");
}

function renderAuditTrail() {
  dom.auditList.innerHTML = state.auditLog
    .map(
      (entry) => `
        <article class="audit-card">
          <strong>${entry.action}</strong>
          <p>${entry.detail}</p>
          <span>${entry.time}</span>
        </article>
      `
    )
    .join("");
}

function renderTable() {
  const students = getFilteredStudents();

  if (!students.length) {
    dom.table.innerHTML = `
      <tr>
        <td colspan="7">
          <div class="empty-state">
            ${state.attendanceOnly ? "No students are currently below 85% attendance." : "No student records match the current filters."}
          </div>
        </td>
      </tr>
    `;
    return;
  }

  const template = document.getElementById("studentRowTemplate");
  dom.table.innerHTML = "";

  students.forEach((student) => {
    const row = template.content.cloneNode(true);
    row.querySelector(".avatar").textContent = initials(student.name);
    row.querySelector(".student-name").textContent = student.name;
    row.querySelector(".student-id").textContent = student.id;
    row.querySelector(".student-class").textContent = student.className;
    row.querySelector(".student-guardian").textContent = student.guardian;
    row.querySelector(".attendance-value").textContent = `${student.attendance}%`;
    row.querySelector(".attendance-pill").style.color = attendanceColor(student.attendance);
    row.querySelector(".student-status").innerHTML = `<span class="${statusClass(student.status)}">${student.status}</span>`;
    row.querySelector(".student-fee").innerHTML = `<span class="${feeClass(student.feeStatus)}">${student.feeStatus}</span>`;

    const editButton = row.querySelector(".edit-button");
    const removeButton = row.querySelector(".remove-button");
    const viewButton = row.querySelector(".view-button");

    editButton.addEventListener("click", () => openModal(student));
    removeButton.addEventListener("click", () => removeStudent(student.id));
    viewButton.addEventListener("click", () => openDetailModal(student));
    row.addEventListener("dblclick", () => openDetailModal(student));

    dom.table.appendChild(row);
  });
}

function openAdminModal(admin = null) {
  state.adminEditIndex = admin ? state.admins.findIndex((entry) => entry.username === admin.username) : null;
  dom.adminModalTitle.textContent = admin ? "Edit admin account" : "Add admin account";
  dom.adminForm.reset();
  const elements = dom.adminForm.elements;

  if (admin) {
    elements.namedItem("fullName").value = admin.fullName;
    elements.namedItem("username").value = admin.username;
    elements.namedItem("email").value = admin.email;
    elements.namedItem("role").value = admin.role;
    elements.namedItem("status").value = admin.status;
    elements.namedItem("lastLogin").value = admin.lastLogin;
    elements.namedItem("permissions").value = admin.permissions;
  }

  dom.adminModal.classList.remove("hidden");
}

function closeAdminModal() {
  dom.adminModal.classList.add("hidden");
  state.adminEditIndex = null;
}

function upsertAdmin(formData) {
  const admin = {
    fullName: formValue(formData, "fullName"),
    username: formValue(formData, "username"),
    email: formValue(formData, "email"),
    role: String(formData.get("role") ?? "Super Admin"),
    status: String(formData.get("status") ?? "Active"),
    permissions: formValue(formData, "permissions"),
    lastLogin: formValue(formData, "lastLogin")
  };

  if (state.adminEditIndex === null) {
    state.admins.unshift(admin);
    addAuditEntry("Admin added", `${admin.fullName} account created`);
  } else {
    state.admins[state.adminEditIndex] = admin;
    addAuditEntry("Admin updated", `${admin.fullName} account updated`);
  }

  renderAdminRoleFilters();
  refreshUI();
  closeAdminModal();
}

function removeAdmin(username) {
  state.admins = state.admins.filter((admin) => admin.username !== username);
  addAuditEntry("Admin removed", `Removed admin account @${username}`);
  renderAdminRoleFilters();
  refreshUI();
}

function openModal(student = null) {
  state.editIndex = student ? state.students.findIndex((entry) => entry.id === student.id) : null;
  dom.modalTitle.textContent = student ? "Edit student" : "Add a new student";
  dom.studentForm.reset();
  const elements = dom.studentForm.elements;

  if (student) {
    elements.namedItem("name").value = student.name;
    elements.namedItem("id").value = student.id;
    elements.namedItem("className").value = student.className;
    elements.namedItem("guardian").value = student.guardian;
    elements.namedItem("attendance").value = student.attendance;
    elements.namedItem("feeStatus").value = student.feeStatus;
    elements.namedItem("status").value = student.status;
    elements.namedItem("notes").value = student.notes;
  }

  dom.studentModal.classList.remove("hidden");
}

function closeModal() {
  dom.studentModal.classList.add("hidden");
  state.editIndex = null;
}

function closeDetailModal() {
  dom.detailModal.classList.add("hidden");
  state.detailStudentId = null;
}

function findStudentById(studentId) {
  return state.students.find((student) => student.id === studentId) || null;
}

function openDetailModal(student) {
  state.detailStudentId = student.id;
  dom.detailTitle.textContent = `${student.name} profile`;
  dom.detailAvatar.textContent = initials(student.name);
  dom.detailName.textContent = student.name;
  dom.detailMeta.textContent = `${student.className} · ${student.guardian}`;
  dom.detailStatusBadge.className = statusClass(student.status);
  dom.detailStatusBadge.textContent = student.status;
  dom.detailFeeBadge.className = feeClass(student.feeStatus);
  dom.detailFeeBadge.textContent = student.feeStatus;
  dom.detailId.textContent = student.id;
  dom.detailAttendance.textContent = `${student.attendance}%`;
  dom.detailGuardian.textContent = student.guardian;
  dom.detailClass.textContent = student.className;
  dom.detailNotes.textContent = student.notes || "No additional notes recorded.";
  dom.detailModal.classList.remove("hidden");
}

function removeStudent(studentId) {
  state.students = state.students.filter((student) => student.id !== studentId);
  addAuditEntry("Student removed", `Removed record ${studentId}`);
  refreshUI();
  closeDetailModal();
}

function formValue(formData, fieldName) {
  return String(formData.get(fieldName) ?? "").trim();
}

function upsertStudent(formData) {
  const student = {
    name: formValue(formData, "name"),
    id: formValue(formData, "id"),
    className: String(formData.get("className") ?? ""),
    guardian: formValue(formData, "guardian"),
    attendance: Number(formData.get("attendance")),
    feeStatus: String(formData.get("feeStatus") ?? ""),
    status: String(formData.get("status") ?? ""),
    notes: formValue(formData, "notes")
  };

  if (state.editIndex === null) {
    state.students.unshift(student);
    addAuditEntry("Student added", `${student.name} was added to the roster`);
  } else {
    state.students[state.editIndex] = student;
    addAuditEntry("Student updated", `${student.name} profile changes were saved`);
  }

  refreshUI();
  closeModal();
}

function markFeePaid() {
  const student = findStudentById(state.detailStudentId);
  if (!student) return;
  student.feeStatus = "Paid";
  addAuditEntry("Fee updated", `${student.name} marked as paid`);
  refreshUI();
  openDetailModal(student);
}

function increaseAttendance() {
  const student = findStudentById(state.detailStudentId);
  if (!student) return;
  student.attendance = Math.min(100, student.attendance + 1);
  addAuditEntry("Attendance adjusted", `${student.name} attendance increased to ${student.attendance}%`);
  refreshUI();
  openDetailModal(student);
}

function editFromDetail() {
  const student = findStudentById(state.detailStudentId);
  if (!student) return;
  closeDetailModal();
  openModal(student);
}

function refreshUI() {
  renderStats();
  renderClassCards();
  renderFeeCards();
  renderTable();
  renderAdminSummary();
  renderAdminTable();
  renderAuditTrail();
  saveStudents();
  saveAdmins();
}

function resetFilters() {
  state.attendanceOnly = false;
  state.filters = {
    query: "",
    className: "all",
    status: "all"
  };
  dom.searchInput.value = "";
  dom.searchInput.placeholder = "Search by name, class, or guardian";
  dom.classFilter.value = "all";
  dom.statusFilter.value = "all";
  renderTable();
}

function highlightLowAttendance() {
  state.attendanceOnly = true;
  state.filters.query = "";
  state.filters.className = "all";
  state.filters.status = "all";
  dom.searchInput.value = "";
  dom.classFilter.value = "all";
  dom.statusFilter.value = "all";
  const lowAttendance = state.students.filter((student) => student.attendance < 85);
  dom.searchInput.placeholder = lowAttendance.length
    ? `Showing ${lowAttendance.length} students below 85% attendance`
    : "Search by name, class, or guardian";
  renderTable();
}

function resetDemoData() {
  state.students = [...initialStudents];
  state.admins = [...initialAdmins];
  state.auditLog = [{ action: "Demo reset", detail: "Restored default school data", time: "Just now" }];
  state.attendanceOnly = false;
  state.filters = {
    query: "",
    className: "all",
    status: "all"
  };
  state.adminFilters = {
    query: "",
    role: "all"
  };
  dom.searchInput.value = "";
  dom.searchInput.placeholder = "Search by name, class, or guardian";
  dom.classFilter.value = "all";
  dom.statusFilter.value = "all";
  dom.adminSearchInput.value = "";
  dom.adminRoleFilter.value = "all";
  renderAdminRoleFilters();
  refreshUI();
}

function wireEvents() {
  document.getElementById("openStudentModal").addEventListener("click", () => openModal());
  document.getElementById("openStudentModalQuick").addEventListener("click", () => openModal());
  document.getElementById("openAdminModal").addEventListener("click", () => openAdminModal());
  document.getElementById("addAdminAccountBtn").addEventListener("click", () => openAdminModal());
  document.getElementById("closeModal").addEventListener("click", closeModal);
  document.getElementById("cancelStudent").addEventListener("click", closeModal);
  document.getElementById("closeAdminModal").addEventListener("click", closeAdminModal);
  document.getElementById("cancelAdmin").addEventListener("click", closeAdminModal);
  document.getElementById("closeDetailModal").addEventListener("click", closeDetailModal);
  document.getElementById("seedDemoData").addEventListener("click", resetDemoData);
  document.getElementById("exportBtn").addEventListener("click", exportRoster);
  document.getElementById("exportBtnQuick").addEventListener("click", exportRoster);
  document.getElementById("resetFiltersBtn").addEventListener("click", resetFilters);
  document.getElementById("highlightAbsentBtn").addEventListener("click", highlightLowAttendance);
  document.getElementById("markFeePaidBtn").addEventListener("click", markFeePaid);
  document.getElementById("increaseAttendanceBtn").addEventListener("click", increaseAttendance);
  document.getElementById("editFromDetailBtn").addEventListener("click", editFromDetail);

  dom.searchInput.addEventListener("input", (event) => {
    state.filters.query = event.target.value;
    renderTable();
  });

  dom.classFilter.addEventListener("change", (event) => {
    state.filters.className = event.target.value;
    renderTable();
  });

  dom.statusFilter.addEventListener("change", (event) => {
    state.filters.status = event.target.value;
    renderTable();
  });

  dom.adminSearchInput.addEventListener("input", (event) => {
    state.adminFilters.query = event.target.value;
    renderAdminTable();
  });

  dom.adminRoleFilter.addEventListener("change", (event) => {
    state.adminFilters.role = event.target.value;
    renderAdminTable();
  });

  dom.studentForm.addEventListener("submit", (event) => {
    event.preventDefault();
    upsertStudent(new FormData(dom.studentForm));
  });

  dom.adminForm.addEventListener("submit", (event) => {
    event.preventDefault();
    upsertAdmin(new FormData(dom.adminForm));
  });

  dom.studentModal.addEventListener("click", (event) => {
    if (event.target === dom.studentModal) {
      closeModal();
    }
  });

  dom.detailModal.addEventListener("click", (event) => {
    if (event.target === dom.detailModal) {
      closeDetailModal();
    }
  });

  dom.adminModal.addEventListener("click", (event) => {
    if (event.target === dom.adminModal) {
      closeAdminModal();
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closeModal();
      closeDetailModal();
      closeAdminModal();
    }
  });
}

function exportRoster() {
  const headers = ["Name", "Student ID", "Class", "Guardian", "Attendance", "Status", "Fee Status", "Notes"];
  const rows = state.students.map((student) => [
    student.name,
    student.id,
    student.className,
    student.guardian,
    `${student.attendance}%`,
    student.status,
    student.feeStatus,
    student.notes
  ]);

  const csv = [headers, ...rows]
    .map((row) => row.map((value) => `"${String(value).replace(/"/g, '""')}"`).join(","))
    .join("\n");

  const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
  const url = URL.createObjectURL(blob);
  const anchor = document.createElement("a");
  anchor.href = url;
  anchor.download = "northstar-student-roster.csv";
  anchor.click();
  URL.revokeObjectURL(url);
}

renderClassFilters();
renderAdminRoleFilters();
renderActivity();
renderAnnouncements();
renderSchedule();
renderStaff();
renderAuditTrail();
wireEvents();
refreshUI();
