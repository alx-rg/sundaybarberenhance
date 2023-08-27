export default function NavBar({ html }) {
  return html`
    <style>
      :host {
        display: block;
        backdrop-filter: blur(3px);
        background: hsla(0deg 0% 100% / 0.9);
      }
      button {
        font-weight: bold;
        border-radius: 50px;
        background-color: #f5f5f5;
        padding: 8px 16px;
      }
    </style>
    <site-container>
      <nav class="flex gap0">
        <h1 class="font-semibold tracking-1">
          <a href="/" class="no-underline">SB</a>
        </h1>
        <button class="mis-auto">
          <a href="https://resurva.com/" target="_blank"> Book Now</a>
        </button>
        <ul class="mis-auto flex gap0 list-none">
          <li><a href="/">Home</a></li>
          <li><a href="/about">About</a></li>
        </ul>
      </nav>
    </site-container>
  `;
}
