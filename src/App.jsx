import { useState } from "react";
import { Check, Edit3, Mail, Plus, Star, X } from "lucide-react";
import avatar from "./assets/profile-avatar.png";
import nsbmLogo from "./assets/nsbm-logo.png";

const INITIAL_PROFILE = {
  name: "Diluka",
  email: "diluka.w@nsbm.ac.lk",
  points: 0,
};

function App() {
  const [profile, setProfile] = useState(INITIAL_PROFILE);
  const [draft, setDraft] = useState(INITIAL_PROFILE);
  const [modalOpen, setModalOpen] = useState(false);
  const [message, setMessage] = useState("");

  const openEditor = () => {
    setDraft(profile);
    setModalOpen(true);
  };

  const closeEditor = () => setModalOpen(false);

  const saveProfile = (event) => {
    event.preventDefault();
    setProfile({
      name: draft.name.trim() || "Diluka",
      email: draft.email.trim() || "diluka.w@nsbm.ac.lk",
      points: Math.max(0, Number(draft.points) || 0),
    });
    setModalOpen(false);
    showMessage("Profile updated successfully");
  };

  const addPoint = () => {
    setProfile((current) => ({ ...current, points: current.points + 1 }));
    showMessage("1 point added");
  };

  const showMessage = (text) => {
    setMessage(text);
    window.clearTimeout(window.__profileToast);
    window.__profileToast = window.setTimeout(() => setMessage(""), 2200);
  };

  return (
    <main className="app-shell">
      <section className="phone-frame" aria-label="Profile Details App">
        <header className="top-bar">
          <div className="status-time">8:33</div>
          <div className="status-icons" aria-hidden="true">
            <span className="signal"><i /><i /><i /></span>
            <span className="wifi">⌁</span>
            <span className="battery"><span /></span>
          </div>
        </header>

        <div className="app-bar">
          <h1>My Profile</h1>
          <button className="edit-button" onClick={openEditor} aria-label="Edit profile">
            <Edit3 size={17} strokeWidth={2.2} />
          </button>
        </div>

        <section className="profile-content">
          <div className="avatar-wrap">
            <img src={avatar} alt="Profile avatar" className="avatar" />
            <span className="verified-badge" title="Verified">
              <Check size={18} strokeWidth={3} />
            </span>
          </div>

          <div className="divider" />

          <div className="info-list">
            <InfoRow label="Name" value={profile.name} />
            <InfoRow
              label="Email"
              value={
                <span className="email-value">
                  <Mail size={15} fill="currentColor" />
                  {profile.email}
                </span>
              }
            />
            <InfoRow
              label="Points"
              value={
                <span className="points-value">
                  <Star size={17} fill="currentColor" />
                  {profile.points}
                </span>
              }
            />
          </div>
        </section>

        <button className="floating-button" onClick={addPoint} aria-label="Add point">
          <Plus size={25} strokeWidth={2.4} />
        </button>

        <footer className="app-footer">
          <img src={nsbmLogo} alt="NSBM Green University" />
        </footer>
      </section>

      {message && <div className="toast"><Check size={16} /> {message}</div>}

      {modalOpen && (
        <div className="modal-backdrop" role="presentation" onMouseDown={closeEditor}>
          <div className="modal" role="dialog" aria-modal="true" aria-labelledby="edit-title" onMouseDown={(e) => e.stopPropagation()}>
            <div className="modal-heading">
              <div>
                <p className="eyebrow">Profile</p>
                <h2 id="edit-title">Edit details</h2>
              </div>
              <button className="close-button" onClick={closeEditor} aria-label="Close">
                <X size={20} />
              </button>
            </div>

            <form onSubmit={saveProfile}>
              <label>
                Name
                <input
                  value={draft.name}
                  onChange={(e) => setDraft({ ...draft, name: e.target.value })}
                  autoFocus
                />
              </label>

              <label>
                Email
                <input
                  type="email"
                  value={draft.email}
                  onChange={(e) => setDraft({ ...draft, email: e.target.value })}
                />
              </label>

              <label>
                Points
                <input
                  type="number"
                  min="0"
                  value={draft.points}
                  onChange={(e) => setDraft({ ...draft, points: e.target.value })}
                />
              </label>

              <div className="modal-actions">
                <button type="button" className="secondary" onClick={closeEditor}>Cancel</button>
                <button type="submit" className="primary">Save changes</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </main>
  );
}

function InfoRow({ label, value }) {
  return (
    <div className="info-row">
      <div className="label">{label}</div>
      <div className="value">{value}</div>
    </div>
  );
}

export default App;
