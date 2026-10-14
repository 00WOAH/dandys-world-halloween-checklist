import { useEffect, useMemo, useRef, useState } from "react";
import "./App.css";


const IMAGE_BASE = `${import.meta.env.BASE_URL}images/`;

const ITEMS = [
  // SKINS
  { id: "toxic-experiment", name: "Toxic Experiment", category: "Skins", cost: 600, image: `${IMAGE_BASE}toxic-experiment.png` },
  { id: "extra-cheese", name: "Extra Cheese", category: "Skins", cost: 600, image: `${IMAGE_BASE}extra-cheese.png` },
  { id: "violet-caster", name: "Violet Caster", category: "Skins", cost: 600, image: `${IMAGE_BASE}violet-caster.png` },
  { id: "zapped-creation", name: "Zapped Creation", category: "Skins", cost: 600, image: `${IMAGE_BASE}zapped-creation.png` },
  { id: "fresh-fall", name: "Fresh fall", category: "Skins", cost: 600, image: `${IMAGE_BASE}fresh-fall.png` },
  { id: "fuzzy-beast", name: "Fuzzy Beast", category: "Skins", cost: 600, image: `${IMAGE_BASE}fuzzy-beast.png` },
  { id: "scarlet-night", name: "Scarlet Night", category: "Skins", cost: 600, image: `${IMAGE_BASE}scarlet-night.png` },
  { id: "sanguine-silence", name: "Sanguine Silence", category: "Skins", cost: 600, image: `${IMAGE_BASE}sanguine-silence.png` },
  { id: "creepy-chord", name: "Creepy Chord", category: "Skins", cost: 600, image: `${IMAGE_BASE}creepy-chord.png` },
  { id: "scary-stylish", name: "Scary Stylish", category: "Skins", cost: 600, image: `${IMAGE_BASE}scary-stylish.png` },
  { id: "ghastly-glow", name: "Ghastly Glow", category: "Skins", cost: 600, image: `${IMAGE_BASE}ghastly-glow.png` },
  { id: "dessertful-scientist", name: "Dessertful Scientist", category: "Skins", cost: 1200, image: `${IMAGE_BASE}dessertful-scientist.png` },
  { id: "full-moon", name: "Full Moon", category: "Skins", cost: 600, image: `${IMAGE_BASE}full-moon.png` },
  { id: "howling-moonstone", name: "Howling Moonstone", category: "Skins", cost: 600, image: `${IMAGE_BASE}howling-moonstone.png` },
  { id: "little-red", name: "Little Red", category: "Skins", cost: 600, image: `${IMAGE_BASE}little-red.png` },
  { id: "wrapped-chic", name: "Wrapped Chic", category: "Skins", cost: 600, image: `${IMAGE_BASE}wrapped-chic.png` },
  { id: "crimson-imp", name: "Crimson Imp", category: "Skins", cost: 600, image: `${IMAGE_BASE}crimson-inp.png` },
  { id: "crinkling-leaves", name: "Crinkling Leaves", category: "Skins", cost: 600, image: `${IMAGE_BASE}crinckling-leaves.png` },
  { id: "midnight-sleeper", name: "Midnight Sleeper", category: "Skins", cost: 600, image: `${IMAGE_BASE}midnight-sleeper.png` },
  { id: "creepy-clown", name: "Creepy Clown", category: "Skins", cost: 600, image: `${IMAGE_BASE}creepy-clown.png` },
  { id: "double-bubble", name: "Double Bubble", category: "Skins", cost: 600, image: `${IMAGE_BASE}double-bubble.png` },
  { id: "haunted-topic", name: "Haunted topic", category: "Skins", cost: 600, image: `${IMAGE_BASE}haunted-topic.png` },
  { id: "skele-kitty", name: "Skele-Kitty", category: "Skins", cost: 600, image: `${IMAGE_BASE}skele-kitty.png` },
  { id: "fairy-godmother", name: "Fairy Godmother", category: "Skins", cost: 600, image: `${IMAGE_BASE}fairy-godmother.png` },
  { id: "gourd-guard", name: "Gourd Guard", category: "Skins", cost: 600, image: `${IMAGE_BASE}gourd-guard.png` },
  { id: "haunted-flame", name: "Haunted Flame", category: "Skins", cost: 600, image: `${IMAGE_BASE}haunted-flame.png` },
  { id: "candy-critter", name: "Candy Critter", category: "Skins", cost: 600, image: `${IMAGE_BASE}candy-critter.png` },
  { id: "infected-candy", name: "Infected Candy", category: "Skins", cost: 600, image: `${IMAGE_BASE}infected-candy.png` },
  { id: "mysterious-spy", name: "Mysterious Spy", category: "Skins", cost: 600, image: `${IMAGE_BASE}mysterious-spy.png` },
  { id: "mossy-stone", name: "Mossy Stone", category: "Skins", cost: 600, image: `${IMAGE_BASE}mossy-stone.png` },
  { id: "steeped-shadow", name: "Steeped Shadow", category: "Skins", cost: 600, image: `${IMAGE_BASE}steeped-shadow.png` },
  { id: "wicked-stitch", name: "Wicked Stitch", category: "Skins", cost: 1200, image: `${IMAGE_BASE}wicked-stitch.png` },
  { id: "lost-prince", name: "Lost Prince", category: "Skins", cost: 1200, image: `${IMAGE_BASE}lost-prince.png` },
  { id: "berry-beast", name: "Berry Beast", category: "Skins", cost: 1200, image: `${IMAGE_BASE}berry-beast.png` },

  // STICKERS
  { id: "got-tricked", name: "Got tricked.", category: "Stickers", cost: 250, image: `${IMAGE_BASE}got-tricked.png` },
  { id: "i-cant-find-you", name: "I Can't Find You!", category: "Stickers", cost: 250, image: `${IMAGE_BASE}i-cant-find-you.png` },
  { id: "looking-good", name: "Looking Good!", category: "Stickers", cost: 250, image: `${IMAGE_BASE}looking-good.png` },
  { id: "see-you-later", name: "See You Later!", category: "Stickers", cost: 250, image: `${IMAGE_BASE}see-you-later.png` },
  { id: "who-needs-help", name: "Who Needs Help?", category: "Stickers", cost: 250, image: `${IMAGE_BASE}who-needs-help.png` },
  { id: "ill-protect-you", name: "I'll Protect You!", category: "Stickers", cost: 250, image: `${IMAGE_BASE}ill-protect-you.png` },
  { id: "keep-it-up", name: "Keep it Up!", category: "Stickers", cost: 250, image: `${IMAGE_BASE}keep-it-up.png` },
  { id: "let-me-help", name: "Let me Help!", category: "Stickers", cost: 250, image: `${IMAGE_BASE}let-me-help.png` },
  { id: "need-anything", name: "Need Anything?", category: "Stickers", cost: 250, image: `${IMAGE_BASE}need-anything.png` },
  { id: "need-healing", name: "Need Healing!!", category: "Stickers", cost: 250, image: `${IMAGE_BASE}need-healing.png` },
  { id: "scared", name: "Scared?", category: "Stickers", cost: 250, image: `${IMAGE_BASE}scared.png` },
  { id: "send-backup", name: "Send Backup!", category: "Stickers", cost: 250, image: `${IMAGE_BASE}send-backup.png` },
  { id: "thank-you", name: "Thank You!!", category: "Stickers", cost: 250, image: `${IMAGE_BASE}thank-you.png` },

  // TOONS
  { id: "ribecca", name: "Ribecca", category: "Toons", cost: 300, image: `${IMAGE_BASE}ribecca.png` },
  { id: "soulvester", name: "Soulvester", category: "Toons", cost: 700, image: `${IMAGE_BASE}soulvester.png` },
  { id: "eclipse", name: "Eclipse", category: "Toons", cost: 1500, image: `${IMAGE_BASE}eclipse.png` },
  { id: "gourdy", name: "Gourdy", category: "Toons", cost: 3000, image: `${IMAGE_BASE}gourdy.png` },

  // STAMPS
  { id: "eclipse-pattern", name: "Eclipse Pattern", category: "Stamps", cost: 400, image: `${IMAGE_BASE}eclipse-pattern.png` },
  { id: "gourdy-pattern", name: "Gourdy Pattern", category: "Stamps", cost: 400, image: `${IMAGE_BASE}gourdy-pattern.png` },
  { id: "ribecca-pattern", name: "Ribecca Pattern", category: "Stamps", cost: 400, image: `${IMAGE_BASE}ribecca-pattern.png` },
  { id: "soulvester-pattern", name: "Soulvester Pattern", category: "Stamps", cost: 400, image: `${IMAGE_BASE}soulvester-pattern.png` },
  { id: "lost-and-found", name: "Lost & Found", category: "Stamps", cost: 800, image: `${IMAGE_BASE}lost-and-found.png` },
];

const CATEGORIES = [
  { name: "All Items", icon: "🎃" },
  { name: "Skins", icon: "🧥" },
  { name: "Toons", icon: "👻" },
  { name: "Stickers", icon: "💬" },
  { name: "Stamps", icon: "🖼️" },
];

const ICONS = { Skins: "🧥", Toons: "👻", Stickers: "💬", Stamps: "🖼️" };
const TOTAL_COST = ITEMS.reduce((sum, item) => sum + item.cost, 0);

const STORAGE_KEY = "boos-halloween-checklist-v1";
const PUMPKINS_STORAGE_KEY = "boos-halloween-pumpkins-v1";
const FAVORITES_STORAGE_KEY = "boos-halloween-favorites-v1";
const RECENT_STORAGE_KEY = "boos-halloween-recent-v1";
const POPUP_SETTINGS_KEY = "boos-halloween-popup-settings-v1";
const PAID_ITEMS_STORAGE_KEY = "boos-halloween-paid-items-v1";
const TRANSACTIONS_STORAGE_KEY = "boos-halloween-transactions-v1";

const HALLOWEEN_TARGET = new Date("2026-11-06T20:00:00Z").getTime();

const TRANSACTION_TYPES = [
  { value: "all", label: "All transactions" },
  { value: "purchase", label: "Purchases" },
  { value: "refund", label: "Refunds" },
  { value: "manual", label: "Manual balance changes" },
  { value: "reset", label: "Pumpkin resets" },
];

const DEFAULT_POPUP_SETTINGS = {
  showPurchasePopup: true,
  preventUnaffordable: false,
  updateBalance: true,
  ignoreFuture: false,
  defaultAction: "change",
};

function loadJSON(key, fallback) {
  try {
    const saved = localStorage.getItem(key);
    return saved === null ? fallback : JSON.parse(saved);
  } catch {
    return fallback;
  }
}

function loadOwned() {
  const saved = loadJSON(STORAGE_KEY, {});
  return saved && typeof saved === "object" && !Array.isArray(saved)
    ? saved
    : {};
}

function loadPumpkins() {
  try {
    const saved = localStorage.getItem(PUMPKINS_STORAGE_KEY);

    if (saved === null) return "0";

    const amount = Number(saved);

    return Number.isFinite(amount) && amount >= 0
      ? String(Math.floor(amount))
      : "0";
  } catch {
    return "0";
  }
}

function loadFavorites() {
  const saved = loadJSON(FAVORITES_STORAGE_KEY, []);
  return Array.isArray(saved) ? saved : [];
}

function loadRecent() {
  const saved = loadJSON(RECENT_STORAGE_KEY, []);
  return Array.isArray(saved) ? saved : [];
}

function loadPaidItems() {
  const saved = loadJSON(PAID_ITEMS_STORAGE_KEY, {});
  return saved && typeof saved === "object" && !Array.isArray(saved)
    ? saved
    : {};
}

function loadTransactions() {
  const saved = loadJSON(TRANSACTIONS_STORAGE_KEY, []);

  if (!Array.isArray(saved)) return [];

  return saved.filter(
    (transaction) =>
      transaction &&
      typeof transaction === "object" &&
      typeof transaction.id === "string" &&
      typeof transaction.type === "string" &&
      typeof transaction.timestamp === "string" &&
      Number.isFinite(Number(transaction.amount)) &&
      Number.isFinite(Number(transaction.previousBalance)) &&
      Number.isFinite(Number(transaction.resultingBalance))
  );
}

function loadPopupSettings() {
  const saved = loadJSON(POPUP_SETTINGS_KEY, {});

  // Keep the old popup preference compatible with the new settings.
  const oldIgnoreFuture = Boolean(saved?.ignoreFuture);
  const oldDefaultAction = saved?.defaultAction === "keep" ? "keep" : "change";

  return {
    showPurchasePopup:
      typeof saved?.showPurchasePopup === "boolean"
        ? saved.showPurchasePopup
        : !oldIgnoreFuture,
    preventUnaffordable:
      typeof saved?.preventUnaffordable === "boolean"
        ? saved.preventUnaffordable
        : false,
    updateBalance:
      typeof saved?.updateBalance === "boolean"
        ? saved.updateBalance
        : oldDefaultAction === "change",
    ignoreFuture: oldIgnoreFuture,
    defaultAction: oldDefaultAction,
  };
}

function createTransaction({
  type,
  amount,
  previousBalance,
  resultingBalance,
  description,
  item,
}) {
  return {
    id:
      typeof crypto !== "undefined" && typeof crypto.randomUUID === "function"
        ? crypto.randomUUID()
        : `${Date.now()}-${Math.random().toString(36).slice(2)}`,
    type,
    timestamp: new Date().toISOString(),
    amount,
    previousBalance,
    resultingBalance,
    description,
    itemId: item?.id ?? null,
    itemName: item?.name ?? null,
  };
}

function formatPumpkins(amount) {
  return Number(amount || 0).toLocaleString();
}

function formatTransactionDate(timestamp) {
  const date = new Date(timestamp);

  if (Number.isNaN(date.getTime())) return "Unknown date";

  return new Intl.DateTimeFormat(undefined, {
    dateStyle: "medium",
    timeStyle: "short",
  }).format(date);
}

function getTransactionTypeLabel(type) {
  switch (type) {
    case "purchase":
      return "Purchase";
    case "refund":
      return "Refund";
    case "manual":
      return "Manual balance adjustment";
    case "reset":
      return "Pumpkin reset";
    default:
      return "Transaction";
  }
}

function ModalOverlay({ children, onClose, labelledBy }) {
  return (
    <div
      className="custom-modal-overlay"
      role="presentation"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
    >
      <section
        className="custom-modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby={labelledBy}
      >
        {children}
      </section>
    </div>
  );
}

function ModalActions({ onCancel, onConfirm, confirmText = "Save changes" }) {
  return (
    <div className="modal-actions">
      <button type="button" className="modal-button modal-button-secondary" onClick={onCancel}>
        Cancel
      </button>
      <button type="button" className="modal-button modal-button-primary" onClick={onConfirm}>
        {confirmText}
      </button>
    </div>
  );
}

function SettingToggle({ title, description, checked, onChange }) {
  return (
    <label className="setting-toggle">
      <span className="setting-toggle-copy">
        <strong>{title}</strong>
        <small>{description}</small>
      </span>
      <input
        type="checkbox"
        checked={checked}
        onChange={(event) => onChange(event.target.checked)}
      />
      <span className="setting-switch" aria-hidden="true" />
    </label>
  );
}

function SettingsModal({ settings, onClose, onSave }) {
  const [draft, setDraft] = useState(settings);

  function updateSetting(key, value) {
    setDraft((current) => ({ ...current, [key]: value }));
  }

  return (
    <ModalOverlay onClose={onClose} labelledBy="settings-modal-title">
      <div className="modal-icon" aria-hidden="true">⚙️</div>
      <h2 id="settings-modal-title" className="modal-title">Checklist Settings</h2>
      <p className="modal-description">
        Customize how collecting items and pumpkin balances work.
      </p>

      <div className="settings-options">
        <SettingToggle
          title="Show purchase popup"
          description="Ask what to do with your pumpkin balance when collecting an affordable item."
          checked={draft.showPurchasePopup}
          onChange={(value) => {
            updateSetting("showPurchasePopup", value);
            if (value) updateSetting("ignoreFuture", false);
          }}
        />

        <SettingToggle
          title="Prevent unaffordable selections"
          description="When enabled, you cannot mark an item as collected if you don't have enough pumpkins. Off by default."
          checked={draft.preventUnaffordable}
          onChange={(value) => updateSetting("preventUnaffordable", value)}
        />

        <SettingToggle
          title="Update pumpkin balance automatically"
          description="When enabled, collecting affordable items subtracts their cost if the purchase popup is disabled."
          checked={draft.updateBalance}
          onChange={(value) => {
            updateSetting("updateBalance", value);
            updateSetting("defaultAction", value ? "change" : "keep");
          }}
        />
      </div>

      <ModalActions
        onCancel={onClose}
        onConfirm={() => onSave(draft)}
        confirmText="Save settings"
      />
    </ModalOverlay>
  );
}

function ResetProgressModal({ onClose, onConfirm }) {
  return (
    <ModalOverlay onClose={onClose} labelledBy="reset-modal-title">
      <div className="modal-icon" aria-hidden="true">🧹</div>
      <h2 id="reset-modal-title" className="modal-title">Reset Progress?</h2>
      <p className="modal-description">
        This will unmark every collectible and clear your recently collected list.
        Your pumpkin balance, favorites, transaction history, and settings will stay unchanged.
      </p>

      <div className="modal-actions">
        <button type="button" className="modal-button modal-button-secondary" onClick={onClose}>
          Cancel
        </button>
        <button type="button" className="modal-button modal-button-danger" onClick={onConfirm}>
          Reset progress
        </button>
      </div>
    </ModalOverlay>
  );
}

function RefundModal({ item, balance, onClose, onConfirm }) {
  if (!item) return null;

  return (
    <ModalOverlay onClose={onClose} labelledBy="refund-modal-title">
      <div className="modal-icon" aria-hidden="true">🎃</div>

      <h2 id="refund-modal-title" className="modal-title">
        Refund Pumpkins?
      </h2>

      <p className="modal-description">
        You're unmarking <strong>{item.name}</strong> as collected.
        Would you like to return its cost to your pumpkin balance?
      </p>

      <div className="modal-summary-row">
        <span>Refund amount</span>
        <strong>{formatPumpkins(item.cost)} 🎃</strong>
      </div>

      <div className="balance-preview">
        <div>
          <span>Current balance</span>
          <strong>{formatPumpkins(balance)} 🎃</strong>
        </div>
        <div>
          <span>After refund</span>
          <strong className="balance-preview-changed">
            {formatPumpkins(balance + item.cost)} 🎃
          </strong>
        </div>
      </div>

      <div className="modal-actions">
        <button
          type="button"
          className="modal-button modal-button-secondary"
          onClick={onClose}
        >
          Cancel
        </button>

        <button
          type="button"
          className="modal-button modal-button-secondary"
          onClick={() => onConfirm(false)}
        >
          Don't refund
        </button>

        <button
          type="button"
          className="modal-button modal-button-primary"
          onClick={() => onConfirm(true)}
        >
          Refund pumpkins
        </button>
      </div>
    </ModalOverlay>
  );
}

function ItemCard({
  item,
  owned,
  canAfford,
  favorite,
  preventUnaffordable,
  onToggle,
  onFavorite,
}) {
  const [imageFailed, setImageFailed] = useState(false);
  const blocked = !owned && !canAfford && preventUnaffordable;

  return (
    <div className={`item-card ${owned ? "is-owned" : ""} ${blocked ? "is-blocked" : ""}`}>
      <button
        type="button"
        className="item-card-main"
        role="checkbox"
        aria-checked={Boolean(owned)}
        aria-disabled={blocked}
        aria-label={`${owned ? "Unmark" : "Mark"} ${item.name} as collected`}
        title={blocked ? "You don't have enough pumpkins for this item." : undefined}
        onClick={() => onToggle(item.id)}
      >
        <span className="item-check" aria-hidden="true">
          <span className="custom-check">{owned ? "✓" : ""}</span>
        </span>

        <span className="item-image">
          {!imageFailed && item.image ? (
            <img src={item.image} alt="" onError={() => setImageFailed(true)} />
          ) : (
            <span aria-hidden="true">{ICONS[item.category]}</span>
          )}
        </span>

        <span className="item-info">
          <span className="item-title">{item.name}</span>
          <span className="item-meta">
            {item.category.slice(0, -1) === "Stam"
              ? "Stamp"
              : item.category.slice(0, -1)}
            {" "}
            <span className="meta-dot">·</span>
            {" "}
            <span className="price-pumpkin">🎃</span>{" "}
            {formatPumpkins(item.cost)}
          </span>
        </span>

        <span
          className={`owned-pill ${owned ? "owned" : canAfford ? "can-afford" : ""}`}
        >
          {owned ? "Collected" : canAfford ? "Can Afford" : "Not yet"}
        </span>
      </button>

      <button
        type="button"
        className={`favorite-button ${favorite ? "is-favorite" : ""}`}
        aria-label={favorite ? `Remove ${item.name} from favorites` : `Add ${item.name} to favorites`}
        title={favorite ? "Remove from favorites" : "Add to favorites"}
        onClick={() => onFavorite(item.id)}
      >
        {favorite ? "★" : "☆"}
      </button>
    </div>
  );
}

function PurchaseModal({
  item,
  balance,
  settings,
  onClose,
  onConfirm,
}) {
  const [action, setAction] = useState(
    settings.defaultAction || (settings.updateBalance ? "change" : "keep")
  );
  const [ignoreFuture, setIgnoreFuture] = useState(settings.ignoreFuture);

  useEffect(() => {
    setAction(settings.defaultAction || (settings.updateBalance ? "change" : "keep"));
    setIgnoreFuture(settings.ignoreFuture);
  }, [item?.id, settings.defaultAction, settings.updateBalance, settings.ignoreFuture]);

  if (!item) return null;

  const nextBalance =
    action === "change" ? Math.max(0, balance - item.cost) : balance;

  return (
    <ModalOverlay onClose={onClose} labelledBy="purchase-modal-title">
      <div className="modal-icon" aria-hidden="true">🎃</div>

      <h2 id="purchase-modal-title" className="modal-title">Update Pumpkins?</h2>

      <p className="modal-description">
        You're marking <strong>{item.name}</strong> as collected.
        What would you like to do with your pumpkin balance?
      </p>

      <div className="modal-summary-row">
        <span>Item cost</span>
        <strong>{formatPumpkins(item.cost)} 🎃</strong>
      </div>

      <div className="purchase-options">
        <label className={`purchase-option ${action === "change" ? "selected" : ""}`}>
          <input
            type="radio"
            name="pumpkin-action"
            value="change"
            checked={action === "change"}
            onChange={() => setAction("change")}
          />
          <span>
            <strong>Change pumpkin balance</strong>
            <small>Subtract {formatPumpkins(item.cost)} pumpkins.</small>
          </span>
        </label>

        <label className={`purchase-option ${action === "keep" ? "selected" : ""}`}>
          <input
            type="radio"
            name="pumpkin-action"
            value="keep"
            checked={action === "keep"}
            onChange={() => setAction("keep")}
          />
          <span>
            <strong>Don't change pumpkin balance</strong>
            <small>Keep your current balance.</small>
          </span>
        </label>
      </div>

      <div className="balance-preview">
        <div>
          <span>Current balance</span>
          <strong>{formatPumpkins(balance)} 🎃</strong>
        </div>
        <div>
          <span>After collecting</span>
          <strong className={action === "change" ? "balance-preview-changed" : ""}>
            {formatPumpkins(nextBalance)} 🎃
          </strong>
        </div>
      </div>

      <label className="ignore-popup-option">
        <input
          type="checkbox"
          checked={ignoreFuture}
          onChange={(event) => setIgnoreFuture(event.target.checked)}
        />
        <span>Don't show this purchase popup in the future</span>
      </label>

      {ignoreFuture && (
        <p className="modal-help-text">
          Your selected balance option will be used automatically. You can turn the popup back on in Settings.
        </p>
      )}

      <div className="modal-actions">
        <button type="button" className="modal-button modal-button-secondary" onClick={onClose}>
          Cancel
        </button>
        <button
          type="button"
          className="modal-button modal-button-primary"
          onClick={() => onConfirm({ action, ignoreFuture })}
        >
          Collect item
        </button>
      </div>
    </ModalOverlay>
  );
}

function Countdown() {
  const [now, setNow] = useState(() => Date.now());

  useEffect(() => {
    const interval = window.setInterval(() => {
      setNow(Date.now());
    }, 1000);

    return () => window.clearInterval(interval);
  }, []);

  const remaining = Math.max(0, HALLOWEEN_TARGET - now);
  const totalSeconds = Math.floor(remaining / 1000);
  const days = Math.floor(totalSeconds / 86400);
  const hours = Math.floor((totalSeconds % 86400) / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;

  const parts = [
    { value: days, label: "Days" },
    { value: hours, label: "Hours" },
    { value: minutes, label: "Minutes" },
    { value: seconds, label: "Seconds" },
  ];

  return (
    <section className="countdown-panel" aria-label="Halloween event countdown">
      <p className="countdown-kicker">🎃 THE HALLOWEEN DEADLINE 🎃</p>
      <h2 className="countdown-title">The spooky countdown</h2>
      <p className="countdown-description">
        Counting down to November 6, 2026 at 20:00 UTC.
      </p>

      <div className="countdown-units">
        {parts.map((part) => (
          <div className="countdown-unit" key={part.label}>
            <strong>{String(part.value).padStart(2, "0")}</strong>
            <span>{part.label}</span>
          </div>
        ))}
      </div>

      {remaining === 0 && (
        <p className="countdown-finished">The countdown has ended. Happy Halloween! 🎃</p>
      )}
    </section>
  );
}

function TransactionHistory({
  transactions,
  onBack,
  onClear,
}) {
  const [search, setSearch] = useState("");
  const [typeFilter, setTypeFilter] = useState("all");
  const [sortOrder, setSortOrder] = useState("newest");
  const [confirmClear, setConfirmClear] = useState(false);

  const visibleTransactions = useMemo(() => {
    const normalizedSearch = search.trim().toLowerCase();

    return [...transactions]
      .filter((transaction) => {
        const typeMatch =
          typeFilter === "all" || transaction.type === typeFilter;

        const searchText = [
          transaction.itemName,
          transaction.description,
          getTransactionTypeLabel(transaction.type),
        ]
          .filter(Boolean)
          .join(" ")
          .toLowerCase();

        return typeMatch && searchText.includes(normalizedSearch);
      })
      .sort((a, b) => {
        const dateA = new Date(a.timestamp).getTime() || 0;
        const dateB = new Date(b.timestamp).getTime() || 0;

        return sortOrder === "newest" ? dateB - dateA : dateA - dateB;
      });
  }, [transactions, search, typeFilter, sortOrder]);

  function clearHistoryFilters() {
    setSearch("");
    setTypeFilter("all");
    setSortOrder("newest");
  }

  return (
    <section className="transaction-section">
      <div className="transaction-heading">
        <div>
          <p className="kicker">YOUR PUMPKIN RECORDS</p>
          <h2>TRANSACTION <span>HISTORY</span></h2>
          <p className="transaction-intro">
            Review purchases, refunds, balance adjustments, and pumpkin resets saved on this device.
          </p>
        </div>

        <button type="button" className="reset-button" onClick={onBack}>
          ← Back to checklist
        </button>
      </div>

      <div className="transaction-toolbar">
        <label className="transaction-search">
          <span aria-hidden="true">⌕</span>
          <input
            value={search}
            onChange={(event) => setSearch(event.target.value)}
            placeholder="Search items or descriptions..."
            aria-label="Search transaction history"
          />
        </label>

        <label className="transaction-filter-field">
          <span>TRANSACTION TYPE</span>
          <select
            value={typeFilter}
            onChange={(event) => setTypeFilter(event.target.value)}
            aria-label="Filter transactions by type"
          >
            {TRANSACTION_TYPES.map((type) => (
              <option value={type.value} key={type.value}>
                {type.label}
              </option>
            ))}
          </select>
        </label>

        <label className="transaction-filter-field">
          <span>SORT ORDER</span>
          <select
            value={sortOrder}
            onChange={(event) => setSortOrder(event.target.value)}
            aria-label="Sort transaction history"
          >
            <option value="newest">Newest first</option>
            <option value="oldest">Oldest first</option>
          </select>
        </label>
      </div>

      <div className="transaction-toolbar-actions">
        <p className="transaction-count">
          Showing <strong>{visibleTransactions.length}</strong> of{" "}
          <strong>{transactions.length}</strong> transactions
        </p>

        <div className="transaction-action-buttons">
          <button
            type="button"
            className="clear-filters-button"
            onClick={clearHistoryFilters}
            disabled={search === "" && typeFilter === "all" && sortOrder === "newest"}
          >
            Clear filters
          </button>

          <button
            type="button"
            className="clear-history-button"
            onClick={() => setConfirmClear(true)}
            disabled={transactions.length === 0}
          >
            Clear history
          </button>
        </div>
      </div>

      {visibleTransactions.length > 0 ? (
        <div className="transaction-list">
          {visibleTransactions.map((transaction) => {
            const amount = Number(transaction.amount);
            const amountClass =
              amount > 0 ? "transaction-positive" :
              amount < 0 ? "transaction-negative" :
              "transaction-neutral";

            return (
              <article className="transaction-card" key={transaction.id}>
                <div className={`transaction-icon transaction-icon-${transaction.type}`}>
                  {transaction.type === "purchase" && "🛍️"}
                  {transaction.type === "refund" && "↩️"}
                  {transaction.type === "manual" && "✎"}
                  {transaction.type === "reset" && "↻"}
                </div>

                <div className="transaction-main">
                  <div className="transaction-card-heading">
                    <h3>{transaction.itemName || getTransactionTypeLabel(transaction.type)}</h3>
                    <span className={`transaction-type-pill transaction-pill-${transaction.type}`}>
                      {getTransactionTypeLabel(transaction.type)}
                    </span>
                  </div>

                  <p className="transaction-description">{transaction.description}</p>

                  <time className="transaction-date" dateTime={transaction.timestamp}>
                    {formatTransactionDate(transaction.timestamp)}
                  </time>

                  <div className="transaction-balances">
                    <span>
                      Before <strong>{formatPumpkins(transaction.previousBalance)} 🎃</strong>
                    </span>
                    <span aria-hidden="true">→</span>
                    <span>
                      After <strong>{formatPumpkins(transaction.resultingBalance)} 🎃</strong>
                    </span>
                  </div>
                </div>

                <strong className={`transaction-amount ${amountClass}`}>
                  {amount > 0 ? "+" : amount < 0 ? "−" : ""}
                  {formatPumpkins(Math.abs(amount))} 🎃
                </strong>
              </article>
            );
          })}
        </div>
      ) : (
        <div className="empty-state transaction-empty-state">
          <span>📜</span>
          <h3>{transactions.length === 0 ? "No transactions yet" : "No matching transactions"}</h3>
          <p>
            {transactions.length === 0
              ? "Purchases, refunds, and balance changes will appear here when they happen."
              : "Try a different search, choose another transaction type, or clear your filters."}
          </p>

          {transactions.length > 0 && (
            <button
              type="button"
              className="reset-button empty-reset-button"
              onClick={clearHistoryFilters}
            >
              Clear filters
            </button>
          )}
        </div>
      )}

      {confirmClear && (
        <ModalOverlay
          onClose={() => setConfirmClear(false)}
          labelledBy="clear-history-title"
        >
          <div className="modal-icon" aria-hidden="true">📜</div>
          <h2 id="clear-history-title" className="modal-title">Clear transaction history?</h2>
          <p className="modal-description">
            This permanently removes the transaction records saved in this browser.
            Your current pumpkin balance, collectibles, favourites, and settings will not change.
          </p>
          <div className="modal-actions">
            <button
              type="button"
              className="modal-button modal-button-secondary"
              onClick={() => setConfirmClear(false)}
            >
              Cancel
            </button>
            <button
              type="button"
              className="modal-button modal-button-danger"
              onClick={() => {
                onClear();
                setConfirmClear(false);
              }}
            >
              Clear history
            </button>
          </div>
        </ModalOverlay>
      )}
    </section>
  );
}

export default function App() {
  const [owned, setOwned] = useState(loadOwned);
  const [pumpkins, setPumpkins] = useState(loadPumpkins);
  const [favorites, setFavorites] = useState(loadFavorites);
  const [recentItems, setRecentItems] = useState(loadRecent);
  const [paidItems, setPaidItems] = useState(loadPaidItems);
  const [popupSettings, setPopupSettings] = useState(loadPopupSettings);
  const [transactions, setTransactions] = useState(loadTransactions);
  const [pendingItemId, setPendingItemId] = useState(null);
  const [pendingRefundItemId, setPendingRefundItemId] = useState(null);
  const [settingsOpen, setSettingsOpen] = useState(false);
  const [resetProgressOpen, setResetProgressOpen] = useState(false);
  const [activePage, setActivePage] = useState("checklist");

  const balanceEditStart = useRef(null);

  const [activeCategory, setActiveCategory] = useState("All Items");
  const [search, setSearch] = useState("");
  const [showMissingOnly, setShowMissingOnly] = useState(false);

  const [sortBy, setSortBy] = useState("default");
  const [minCost, setMinCost] = useState("");
  const [maxCost, setMaxCost] = useState("");
  const [exactCost, setExactCost] = useState("");
  const [activeView, setActiveView] = useState("all");

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(owned));
    } catch {
      // The checklist still works if browser storage is unavailable.
    }
  }, [owned]);

  useEffect(() => {
    try {
      localStorage.setItem(PUMPKINS_STORAGE_KEY, pumpkins);
    } catch {
      // The pumpkin balance still works if browser storage is unavailable.
    }
  }, [pumpkins]);

  useEffect(() => {
    try {
      localStorage.setItem(FAVORITES_STORAGE_KEY, JSON.stringify(favorites));
    } catch {
      // Favorites still work until the page is refreshed.
    }
  }, [favorites]);

  useEffect(() => {
    try {
      localStorage.setItem(RECENT_STORAGE_KEY, JSON.stringify(recentItems));
    } catch {
      // Recent collection history still works until the page is refreshed.
    }
  }, [recentItems]);

  useEffect(() => {
    try {
      localStorage.setItem(PAID_ITEMS_STORAGE_KEY, JSON.stringify(paidItems));
    } catch {
      // Paid-item tracking still works for this session.
    }
  }, [paidItems]);

  useEffect(() => {
    try {
      localStorage.setItem(POPUP_SETTINGS_KEY, JSON.stringify(popupSettings));
    } catch {
      // Popup preferences still work for this session.
    }
  }, [popupSettings]);

  useEffect(() => {
    try {
      localStorage.setItem(TRANSACTIONS_STORAGE_KEY, JSON.stringify(transactions));
    } catch {
      // Transaction history remains available for this session.
    }
  }, [transactions]);

  const pumpkinBalance = Number(pumpkins) || 0;

  function recordTransaction({
    type,
    amount,
    previousBalance,
    resultingBalance,
    description,
    item = null,
  }) {
    if (previousBalance === resultingBalance) return;

    const transaction = createTransaction({
      type,
      amount,
      previousBalance,
      resultingBalance,
      description,
      item,
    });

    setTransactions((current) => [transaction, ...current]);
  }

  function handlePumpkinsFocus() {
    balanceEditStart.current = Number(pumpkins) || 0;
  }

  function handlePumpkinsBlur() {
    if (balanceEditStart.current === null) return;

    const previousBalance = balanceEditStart.current;
    const resultingBalance = Number(pumpkins) || 0;

    balanceEditStart.current = null;

    if (previousBalance === resultingBalance) return;

    const difference = resultingBalance - previousBalance;
    const direction = difference > 0 ? "increased" : "decreased";

    recordTransaction({
      type: "manual",
      amount: difference,
      previousBalance,
      resultingBalance,
      description: `Pumpkin balance manually ${direction} by ${formatPumpkins(Math.abs(difference))} pumpkins.`,
    });
  }

  const ownedCount = ITEMS.filter((item) => owned[item.id]).length;

  const ownedCost = ITEMS.reduce(
    (sum, item) => sum + (owned[item.id] ? item.cost : 0),
    0
  );

  const remainingCost = TOTAL_COST - ownedCost;
  const stillToSave = Math.max(0, remainingCost - pumpkinBalance);

  // Completion is based on the pumpkin value collected, rounded to a whole percentage.
  const percent = Math.round((ownedCost / TOTAL_COST) * 100);

  const pendingItem = ITEMS.find((item) => item.id === pendingItemId) || null;
  const pendingRefundItem =
    ITEMS.find((item) => item.id === pendingRefundItemId) || null;

  const visibleItems = useMemo(() => {
    const normalizedSearch = search.trim().toLowerCase();
    const minimum = minCost === "" ? null : Number(minCost);
    const maximum = maxCost === "" ? null : Number(maxCost);
    const exact = exactCost === "" ? null : Number(exactCost);

    const filteredItems = ITEMS.filter((item) => {
      const categoryMatch =
        activeCategory === "All Items" || item.category === activeCategory;

      const searchMatch = item.name.toLowerCase().includes(normalizedSearch);
      const missingMatch = !showMissingOnly || !owned[item.id];

      const minimumMatch = minimum === null || item.cost >= minimum;
      const maximumMatch = maximum === null || item.cost <= maximum;
      const exactMatch = exact === null || item.cost === exact;

      const viewMatch =
        activeView === "all" ||
        (activeView === "favorites" && favorites.includes(item.id)) ||
        (activeView === "affordable" && !owned[item.id] && pumpkinBalance >= item.cost) ||
        (activeView === "recent" && recentItems.includes(item.id));

      return (
        categoryMatch &&
        searchMatch &&
        missingMatch &&
        minimumMatch &&
        maximumMatch &&
        exactMatch &&
        viewMatch
      );
    });

    const sortedItems = [...filteredItems];

    switch (sortBy) {
      case "name-asc":
        sortedItems.sort((a, b) =>
          a.name.localeCompare(b.name, undefined, {
            sensitivity: "base",
            numeric: true,
          })
        );
        break;

      case "name-desc":
        sortedItems.sort((a, b) =>
          b.name.localeCompare(a.name, undefined, {
            sensitivity: "base",
            numeric: true,
          })
        );
        break;

      case "cost-asc":
        sortedItems.sort(
          (a, b) => a.cost - b.cost || a.name.localeCompare(b.name)
        );
        break;

      case "cost-desc":
        sortedItems.sort(
          (a, b) => b.cost - a.cost || a.name.localeCompare(b.name)
        );
        break;

      case "owned-first":
        sortedItems.sort(
          (a, b) =>
            Number(Boolean(owned[b.id])) - Number(Boolean(owned[a.id])) ||
            a.name.localeCompare(b.name)
        );
        break;

      case "needed-first":
        sortedItems.sort(
          (a, b) =>
            Number(Boolean(owned[a.id])) - Number(Boolean(owned[b.id])) ||
            a.name.localeCompare(b.name)
        );
        break;

      case "recent-first":
        sortedItems.sort(
          (a, b) => recentItems.indexOf(a.id) - recentItems.indexOf(b.id)
        );
        break;

      default:
        break;
    }

    return sortedItems;
  }, [
    activeCategory,
    search,
    showMissingOnly,
    owned,
    sortBy,
    minCost,
    maxCost,
    exactCost,
    activeView,
    favorites,
    pumpkinBalance,
    recentItems,
  ]);

  const categoryCounts = useMemo(() => {
    const result = {};

    for (const category of CATEGORIES) {
      const list =
        category.name === "All Items"
          ? ITEMS
          : ITEMS.filter((item) => item.category === category.name);

      result[category.name] = {
        total: list.length,
        owned: list.filter((item) => owned[item.id]).length,
      };
    }

    return result;
  }, [owned]);

  const hasCostFilters =
    minCost !== "" || maxCost !== "" || exactCost !== "";

  function handlePumpkinsChange(event) {
    const value = event.target.value;

    if (value === "") {
      setPumpkins("");
      return;
    }

    if (/^\d+$/.test(value)) {
      setPumpkins(String(Number(value)));
    }
  }

  function finishCollecting(item, action) {
    if (!item) return;

    const currentBalance = Number(pumpkins) || 0;
    const actuallyPaid = action === "change" && currentBalance >= item.cost;
    const resultingBalance = actuallyPaid ? currentBalance - item.cost : currentBalance;

    if (actuallyPaid) {
      setPumpkins(String(resultingBalance));

      recordTransaction({
        type: "purchase",
        amount: -item.cost,
        previousBalance: currentBalance,
        resultingBalance,
        description: `Purchased ${item.name} for ${formatPumpkins(item.cost)} pumpkins.`,
        item,
      });
    }

    // Track only items whose costs were actually deducted.
    setPaidItems((current) => ({
      ...current,
      [item.id]: actuallyPaid,
    }));

    setOwned((current) => ({ ...current, [item.id]: true }));

    setRecentItems((current) => [
      item.id,
      ...current.filter((id) => id !== item.id),
    ]);

    setPendingItemId(null);
  }

  function toggleOwned(id) {
    const item = ITEMS.find((entry) => entry.id === id);

    if (!item) return;

    // Only offer a refund if pumpkins were actually deducted for this item.
    if (owned[id]) {
      if (!paidItems[id]) {
        setOwned((current) => ({ ...current, [id]: false }));
        setRecentItems((current) =>
          current.filter((itemId) => itemId !== id)
        );
        return;
      }

      // Refund automatically when automatic balance updates are enabled.
      if (popupSettings.updateBalance) {
        const currentBalance = Number(pumpkins) || 0;
        const resultingBalance = currentBalance + item.cost;

        setPumpkins(String(resultingBalance));

        recordTransaction({
          type: "refund",
          amount: item.cost,
          previousBalance: currentBalance,
          resultingBalance,
          description: `Refunded ${formatPumpkins(item.cost)} pumpkins for ${item.name}.`,
          item,
        });

        setPaidItems((current) => ({ ...current, [id]: false }));
        setOwned((current) => ({ ...current, [id]: false }));
        setRecentItems((current) =>
          current.filter((itemId) => itemId !== id)
        );
      } else {
        // Otherwise, ask whether the user wants the pumpkins refunded.
        setPendingRefundItemId(id);
      }

      return;
    }

    const currentBalance = Number(pumpkins) || 0;
    const canAfford = currentBalance >= item.cost;

    // This option prevents selecting an item that costs more than the balance.
    if (!canAfford && popupSettings.preventUnaffordable) {
      return;
    }

    // Unaffordable items can still be marked collected when the setting is off.
    // They never trigger a purchase popup or deduct pumpkins.
    if (!canAfford) {
      setPaidItems((current) => ({ ...current, [id]: false }));
      setOwned((current) => ({ ...current, [id]: true }));
      setRecentItems((current) => [
        id,
        ...current.filter((itemId) => itemId !== id),
      ]);
      return;
    }

    // When the popup is disabled, apply the saved balance setting automatically.
    if (!popupSettings.showPurchasePopup) {
      finishCollecting(item, popupSettings.updateBalance ? "change" : "keep");
      return;
    }

    setPendingItemId(id);
  }

  function confirmUncollect(refund) {
    if (!pendingRefundItem) return;

    const item = pendingRefundItem;
    const actuallyRefunded = refund && Boolean(paidItems[item.id]);

    if (actuallyRefunded) {
      const currentBalance = Number(pumpkins) || 0;
      const resultingBalance = currentBalance + item.cost;

      setPumpkins(String(resultingBalance));

      recordTransaction({
        type: "refund",
        amount: item.cost,
        previousBalance: currentBalance,
        resultingBalance,
        description: `Refunded ${formatPumpkins(item.cost)} pumpkins for ${item.name}.`,
        item,
      });
    }

    setPaidItems((current) => ({ ...current, [item.id]: false }));
    setOwned((current) => ({ ...current, [item.id]: false }));

    setRecentItems((current) =>
      current.filter((itemId) => itemId !== item.id)
    );

    setPendingRefundItemId(null);
  }

  function toggleFavorite(id) {
    setFavorites((current) =>
      current.includes(id)
        ? current.filter((itemId) => itemId !== id)
        : [...current, id]
    );
  }

  function resetProgress() {
    setOwned({});
    setPaidItems({});
    setRecentItems([]);
    setPendingItemId(null);
    setPendingRefundItemId(null);
    setResetProgressOpen(false);
    // Deliberately leave pumpkin balance and transaction history untouched.
  }

  function resetPumpkins() {
    const previousBalance = Number(pumpkins) || 0;

    if (previousBalance !== 0) {
      recordTransaction({
        type: "reset",
        amount: -previousBalance,
        previousBalance,
        resultingBalance: 0,
        description: `Pumpkin balance reset from ${formatPumpkins(previousBalance)} to 0.`,
      });
    }

    setPumpkins("0");
  }

  function clearFilters() {
    setSearch("");
    setSortBy("default");
    setMinCost("");
    setMaxCost("");
    setExactCost("");
    setShowMissingOnly(false);
    setActiveView("all");
  }

  function confirmCollection({ action, ignoreFuture }) {
    if (ignoreFuture) {
      setPopupSettings((current) => ({
        ...current,
        showPurchasePopup: false,
        ignoreFuture: true,
        defaultAction: action,
        updateBalance: action === "change",
      }));
    }

    finishCollecting(pendingItem, action);
  }

  function saveSettings(nextSettings) {
    const showPurchasePopup = Boolean(nextSettings.showPurchasePopup);

    setPopupSettings({
      ...nextSettings,
      showPurchasePopup,
      ignoreFuture: !showPurchasePopup,
      defaultAction: nextSettings.updateBalance ? "change" : "keep",
    });

    setSettingsOpen(false);
  }

  function clearTransactions() {
    setTransactions([]);
  }

  return (
    <main className="site-shell">
      <header className="topbar">
        <a className="brand" href="#top" aria-label="Dandy's World checklist home">
          <span className="brand-icon">🧀</span>
          <span>DANDY'S WORLD <b>CHECKLIST</b></span>
        </a>
        <span className="free-tag">✦ FREE HALLOWEEN CHECKLIST ✦</span>
      </header>

      <section className="hero" id="top">
        <div className="hero-orb orb-one" aria-hidden="true">✦</div>
        <div className="hero-orb orb-two" aria-hidden="true">✧</div>

        <div className="cheese-banner">
          <img
            src="/images/extra-cheese-beige-banner.png"
            alt="Cute Extra Cheese-inspired Halloween artwork with a burger-hat mascot, cheese, fries, and pumpkins"
          />
        </div>

        <p className="kicker">THE SPOOKIEST COLLECTION OF THE YEAR</p>
        <h1>HALLOWEEN <span>COLLECTION</span></h1>
        <p className="hero-copy">
          Keep track of every Halloween skin, sticker, Toon, and stamp.
          <br />
          Check things off as you collect them!
        </p>
        <div className="hero-chips">
          <span>🎃 {ITEMS.length} collectibles</span>
          <span>🧀 {TOTAL_COST.toLocaleString()} pumpkins total</span>
          <span>♡ Progress saves on this device</span>
        </div>

        <Countdown />
      </section>

      <section className="pumpkin-balance-section" aria-label="Your pumpkin balance">
        <div className="stat-card pumpkin-balance-card">
          <label htmlFor="pumpkin-balance" className="pumpkin-balance-label">
            <span className="stat-label">PUMPKINS</span>
            <span className="pumpkin-balance-description">Your current balance</span>
          </label>

          <div className="pumpkin-balance-input-wrap">
            <span aria-hidden="true">🎃</span>
            <input
              id="pumpkin-balance"
              type="number"
              min="0"
              step="1"
              inputMode="numeric"
              value={pumpkins}
              onFocus={handlePumpkinsFocus}
              onBlur={handlePumpkinsBlur}
              onChange={handlePumpkinsChange}
              aria-label="Current pumpkin balance"
              placeholder="0"
            />
          </div>
        </div>

        <div className="balance-actions">
          <button
            type="button"
            className="reset-button"
            onClick={resetPumpkins}
          >
            ↻ Reset pumpkins
          </button>
          <button
            type="button"
            className="reset-button settings-button"
            onClick={() => setSettingsOpen(true)}
          >
            ⚙ Settings
          </button>
        </div>
      </section>

      <section className="stats-grid" aria-label="Collection progress">
        <div className="stat-card stat-main">
          <span className="stat-label">COLLECTION COMPLETE</span>
          <strong>{percent}%</strong>
          <div className="progress-track">
            <span style={{ width: `${percent}%` }} />
          </div>
        </div>

        <div className="stat-card">
          <span className="stat-label">PUMPKINS NEEDED</span>
          <strong>{TOTAL_COST.toLocaleString()} <i>🎃</i></strong>
          <small>Cost of the full collection</small>
        </div>

        <div className="stat-card">
          <span className="stat-label">STILL TO SAVE</span>
          <strong>{stillToSave.toLocaleString()} <i>🎃</i></strong>
          <small>Remaining cost minus your current balance</small>
        </div>

        <div className="stat-card">
          <span className="stat-label">COST OF REMAINING ITEMS</span>
          <strong>{remainingCost.toLocaleString()} <i>🎃</i></strong>
          <small>Total cost of items you haven't collected</small>
        </div>

        <div className="stat-card">
          <span className="stat-label">PUMPKINS SPENT</span>
          <strong>{ownedCost.toLocaleString()} <i>🎃</i></strong>
          <small>Cost of items marked collected</small>
        </div>
      </section>

      <div className="page-navigation" aria-label="Checklist pages">
        <button
          type="button"
          className={`page-navigation-button ${activePage === "checklist" ? "active" : ""}`}
          aria-pressed={activePage === "checklist"}
          onClick={() => setActivePage("checklist")}
        >
          🎃 Collection checklist
        </button>
        <button
          type="button"
          className={`page-navigation-button ${activePage === "history" ? "active" : ""}`}
          aria-pressed={activePage === "history"}
          onClick={() => setActivePage("history")}
        >
          📜 Transaction history
          <span className="history-count">{transactions.length}</span>
        </button>
      </div>

      {activePage === "checklist" ? (
        <section className="collection-section">
          <div className="section-heading">
            <div>
              <p className="kicker">YOUR SPOOKY SHOP LIST</p>
              <h2>THE COLLECTION <span>✦</span></h2>
            </div>
            <button
              className="reset-button"
              type="button"
              onClick={() => setResetProgressOpen(true)}
            >
              ↻ Reset progress
            </button>
          </div>

          <div className="category-tabs" role="tablist" aria-label="Item categories">
            {CATEGORIES.map((category) => (
              <button
                key={category.name}
                type="button"
                role="tab"
                aria-selected={activeCategory === category.name}
                className={
                  activeCategory === category.name
                    ? "category-tab active"
                    : "category-tab"
                }
                onClick={() => setActiveCategory(category.name)}
              >
                <span>{category.icon}</span>
                {category.name}
                <small>
                  {categoryCounts[category.name].owned}/{categoryCounts[category.name].total}
                </small>
              </button>
            ))}
          </div>

          <div className="tools-row">
            <label className="search-box">
              <span aria-hidden="true">⌕</span>
              <input
                value={search}
                onChange={(event) => setSearch(event.target.value)}
                placeholder="Find a spooky item..."
                aria-label="Search items"
              />
              <kbd>SEARCH</kbd>
            </label>

            <label className="missing-toggle">
              <input
                type="checkbox"
                checked={showMissingOnly}
                onChange={(event) => setShowMissingOnly(event.target.checked)}
              />
              <span className="toggle-ui" />
              Show only items needed
            </label>
          </div>

          <div className="checklist-views" aria-label="Custom checklist views">
            {[
              { id: "all", label: "All items" },
              { id: "favorites", label: `★ Favorites (${favorites.length})` },
              {
                id: "affordable",
                label: `🎃 Affordable (${ITEMS.filter((item) => !owned[item.id] && pumpkinBalance >= item.cost).length})`,
              },
              { id: "recent", label: `🕒 Recently collected (${recentItems.length})` },
            ].map((view) => (
              <button
                key={view.id}
                type="button"
                onClick={() => setActiveView(view.id)}
                aria-pressed={activeView === view.id}
                className={`checklist-view-button ${activeView === view.id ? "active" : ""}`}
              >
                {view.label}
              </button>
            ))}
          </div>

          <div className="filter-panel">
            <div className="filter-panel-heading">
              <div className="filter-panel-title">
                <span aria-hidden="true">☷</span>
                <span>Sort &amp; filter</span>
              </div>

              <button
                type="button"
                className="clear-filters-button"
                onClick={clearFilters}
                disabled={
                  sortBy === "default" &&
                  minCost === "" &&
                  maxCost === "" &&
                  exactCost === "" &&
                  search === "" &&
                  !showMissingOnly &&
                  activeView === "all"
                }
              >
                Clear filters
              </button>
            </div>

            <div className="filter-controls">
              <label className="filter-field sort-field">
                <span className="filter-label">SORT BY</span>
                <select
                  value={sortBy}
                  onChange={(event) => setSortBy(event.target.value)}
                  aria-label="Sort items by"
                >
                  <option value="default">Default order</option>
                  <option value="name-asc">Name: A–Z</option>
                  <option value="name-desc">Name: Z–A</option>
                  <option value="cost-asc">Pumpkins: lowest first</option>
                  <option value="cost-desc">Pumpkins: highest first</option>
                  <option value="owned-first">Collected first</option>
                  <option value="needed-first">Needed first</option>
                  <option value="recent-first">Recently collected first</option>
                </select>
              </label>

              <div className="filter-field">
                <label className="filter-label" htmlFor="minimum-cost">MINIMUM 🎃</label>
                <input
                  id="minimum-cost"
                  type="number"
                  min="0"
                  step="1"
                  inputMode="numeric"
                  placeholder="No minimum"
                  value={minCost}
                  onChange={(event) =>
                    setMinCost(event.target.value === "" ? "" : String(Math.max(0, Number(event.target.value))))
                  }
                />
              </div>

              <div className="filter-field">
                <label className="filter-label" htmlFor="maximum-cost">MAXIMUM 🎃</label>
                <input
                  id="maximum-cost"
                  type="number"
                  min="0"
                  step="1"
                  inputMode="numeric"
                  placeholder="No maximum"
                  value={maxCost}
                  onChange={(event) =>
                    setMaxCost(event.target.value === "" ? "" : String(Math.max(0, Number(event.target.value))))
                  }
                />
              </div>

              <div className="filter-field">
                <label className="filter-label" htmlFor="exact-cost">EXACT COST 🎃</label>
                <input
                  id="exact-cost"
                  type="number"
                  min="0"
                  step="1"
                  inputMode="numeric"
                  placeholder="Any cost"
                  value={exactCost}
                  onChange={(event) =>
                    setExactCost(event.target.value === "" ? "" : String(Math.max(0, Number(event.target.value))))
                  }
                />
              </div>
            </div>

            {minCost !== "" && maxCost !== "" && Number(minCost) > Number(maxCost) && (
              <p className="filter-hint filter-warning">
                Your minimum is higher than your maximum, so no items can match this range.
              </p>
            )}

            {hasCostFilters && !(minCost !== "" && maxCost !== "" && Number(minCost) > Number(maxCost)) && (
              <p className="filter-hint">
                {exactCost !== ""
                  ? `Showing items costing exactly ${Number(exactCost).toLocaleString()} 🎃, within any range you set.`
                  : "Showing items within your selected pumpkin-cost range."}
              </p>
            )}
          </div>

          <div className="list-summary">
            <span>SHOWING <b>{visibleItems.length}</b> ITEMS</span>
            <span>
              {categoryCounts[activeCategory].owned} / {categoryCounts[activeCategory].total} COLLECTED
            </span>
          </div>

          {visibleItems.length ? (
            <div className="items-grid">
              {visibleItems.map((item) => (
                <ItemCard
                  key={item.id}
                  item={item}
                  owned={owned[item.id]}
                  canAfford={pumpkinBalance >= item.cost}
                  favorite={favorites.includes(item.id)}
                  preventUnaffordable={popupSettings.preventUnaffordable}
                  onToggle={toggleOwned}
                  onFavorite={toggleFavorite}
                />
              ))}
            </div>
          ) : (
            <div className="empty-state">
              <span>🦇</span>
              <h3>No items found!</h3>
              <p>
                Try another search, adjust your filters, or switch to another checklist view.
              </p>
              {(hasCostFilters || activeView !== "all") && (
                <button
                  type="button"
                  className="reset-button empty-reset-button"
                  onClick={() => {
                    setMinCost("");
                    setMaxCost("");
                    setExactCost("");
                    setActiveView("all");
                  }}
                >
                  Clear filters
                </button>
              )}
            </div>
          )}
        </section>
      ) : (
        <TransactionHistory
          transactions={transactions}
          onBack={() => setActivePage("checklist")}
          onClear={clearTransactions}
        />
      )}

      <footer className="footer">
        <div className="footer-pumpkin">🎃</div>
        <p>Made with a little mischief and a lot of pumpkins.</p>
        <small>
          Unofficial fan-made project. Not affiliated with Dandy's World or its creators.
        </small>
      </footer>

      <PurchaseModal
        item={pendingItem}
        balance={pumpkinBalance}
        settings={popupSettings}
        onClose={() => setPendingItemId(null)}
        onConfirm={confirmCollection}
      />

      <RefundModal
        item={pendingRefundItem}
        balance={pumpkinBalance}
        onClose={() => setPendingRefundItemId(null)}
        onConfirm={confirmUncollect}
      />

      {settingsOpen && (
        <SettingsModal
          settings={popupSettings}
          onClose={() => setSettingsOpen(false)}
          onSave={saveSettings}
        />
      )}

      {resetProgressOpen && (
        <ResetProgressModal
          onClose={() => setResetProgressOpen(false)}
          onConfirm={resetProgress}
        />
      )}
    </main>
  );
}