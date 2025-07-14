# Spreadsheet-UI-React

A modern, interactive spreadsheet component built with React, TypeScript, and TanStack Table. This project provides Excel-like functionality with keyboard navigation, inline editing, and various cell types.

##  Features

- **Interactive Spreadsheet**: Excel-like interface with keyboard navigation
- **Inline Editing**: Click or press Enter to edit cells
- **Keyboard Navigation**: Arrow keys, Tab, Enter for seamless navigation
- **Multiple Cell Types**: Support for text, currency, date, status, priority, and URL cells
- **Real-time Updates**: Live data editing with callback support
- **Empty Row Support**: Add new rows dynamically
- **Responsive Design**: Built with Tailwind CSS for modern UI

##  Prerequisites

- Node.js (v16 or higher)
- npm or yarn package manager

##  Setup & Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Aakashmid/Spreadsheet-UI-React.git
   cd Spreadsheet-UI-React
   ```

2. **Navigate to the app directory**
   ```bash
   cd myapp
   ```

3. **Install dependencies**
   ```bash
   npm install
   ```

4. **Start the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   Navigate to `http://localhost:3000` to see the application.

##  Project Structure

```
myapp/
├── src/
│   ├── components/
│   │   └── table/
│   │       ├── common-components/
│   │       │   ├── TableCell.tsx          # Main cell component
│   │       │   ├── CellVariants.tsx       # Specialized cell types
│   │       │   └── ...
│   │       └── ...
│   ├── data/
│   │   └── sheetData.ts                   # Sample data structure
│   ├── App.tsx                            # Main application
│   └── ...
├── package.json
└── README.md
```

##  Key Components

### TableCell Component
The core component that handles:
- Cell editing and display modes
- Keyboard navigation (Arrow keys, Tab, Enter, Escape)
- Focus management
- Data validation and updates

### Cell Variants
Specialized components for different data types:
- `CurrencyCell`: Formatted currency display
- `DateCell`: Date  validation
- `StatusCell`: Status badges with colors
- `PriorityCell`: Priority indicators
- `UrlCell`: Clickable URL links

##  Keyboard Shortcuts

| Key | Action |
|-----|--------|
| `Enter` | Enter edit mode / Save and move down |
| `Escape` | Cancel editing |
| `Tab` | Move to next cell (Shift+Tab for previous) |
| `Arrow Keys` | Navigate between cells |
| `Backspace` | Clear cell content |
| `Any character` | Start editing with typed character |

## Trade-offs & Considerations

### Performance
- **Trade-off**: Each cell is a separate React component
- **Impact**: May affect performance with very large datasets (1000+ cells)
- **Consideration**: Suitable for small to medium-sized datasets

### DOM Navigation
- **Trade-off**: Direct DOM queries for cell navigation instead of pure React refs
- **Reason**: TanStack Table's complex DOM structure requires flexible cell detection
- **Benefit**: More reliable navigation across different table structures

### State Management
- **Trade-off**: Local state in each cell vs centralized state management
- **Benefit**: Better performance and simpler implementation for current use case
- **Consideration**: Requires prop drilling for data updates







