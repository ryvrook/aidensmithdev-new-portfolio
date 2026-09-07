# Portfolio branding

Assets retained from `ryvrook/portfolio-tsx` rather than regenerated.

- Standard hummingbird: the dark-theme logo referenced in `components/UI/Navbar.tsx` at `884c63fff53fcee08488c36caac9ee9feb79762c`. Original URL: https://images.ctfassets.net/gpz0vzuizl3q/3KH1z17kn9Xz3j0KWZ2ozT/9fe2f9bfdeb9165ded0a682fe7bf1f26/121212.png?h=250
- Pride hummingbird: the animated June logo referenced by the historical navbar at `6cecd614ae`. Original URL: https://images.ctfassets.net/gpz0vzuizl3q/6mmTyMbqxsT9nky5PM2FYY/1435ff9dd9abb16351405d57fb7b412d/JuneIconV2.gif?h=250
- Favicons and touch icons: unchanged bytes from `public/` at `884c63fff53fcee08488c36caac9ee9feb79762c`.

The historical navbar switched artwork manually. `SeasonalBrandProvider` now selects the Pride logo and tab icon throughout June using the visitor's local date. It checks again at midnight and when the tab regains focus or changes visibility, without requiring a new static build. The original favicon is the static/no-JavaScript fallback. Touch icons keep the original artwork. Reduced-motion visitors see the nonanimated standard introduction logo.

Both logo assets are served locally. No Contentful request is needed at runtime.

The visible logo replaces the homepage profile picture. The provider stays in the root layout so the seasonal favicon also works when opening a project or blog page directly.

For a local June preview, open `http://localhost:3007/?pride=1`. This override is development-only and is ignored in production.
