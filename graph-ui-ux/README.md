# Bar Graph UI/UX in HTML/CSS

A clean and minimal bar graph card built using pure HTML and CSS.

The design recreates a modern analytics-style UI with:

- Rounded dashboard cards
- Monthly bar chart
- Highlighted active month
- Soft shadows and layered layout
- Responsive centered design

## Preview

The component includes:

- Main statistics card
- Background secondary card
- Custom bar chart
- Grid lines
- Styled action button

## Technologies Used

- HTML5
- CSS3
- Flexbox
- Absolute Positioning

## Project Structure

```bash
project/
│
├── index.html
└── README.md
```

## How to Use

1. Create a new folder
2. Add the `index.html` file
3. Paste the provided HTML/CSS code
4. Open the file in your browser

## Features

### Dashboard Layout
The layout uses layered cards to create depth and a modern UI appearance.

### Custom Chart
The chart is fully built with HTML and CSS without external libraries.

### Active Month Highlight
The March bar is highlighted using:
- Blue accent color
- Glow shadow effect
- Value label

### Responsive Centering
The entire component is centered vertically and horizontally using Flexbox.

## Customization

You can easily modify:

| Element | Location |
|---|---|
| Card background | `.card` |
| Active bar color | `.active` |
| Grid line color | `.grid` |
| Button style | `.btn` |
| Bar heights | Inline `height` styles |

Example:

```css
.active{
  background:#2f52ff;
}
```

## Browser Support

Works in all modern browsers including:

- Chrome
- Edge
- Firefox
- Safari

## License

Free to use for personal and commercial projects.
