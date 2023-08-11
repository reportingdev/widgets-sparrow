const fs = require('fs');
const path = require('path');

const dirPath = path.resolve(__dirname, '..', 'src', 'stories');
const outputDir = path.resolve(__dirname, '..', 'src', 'export');

const isCapitalized = str => str[0] === str[0].toUpperCase();
const isDirectory = source => fs.statSync(source).isDirectory();

// Create output dir if not exist
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir);
}

const themes = fs.readdirSync(dirPath).filter(isCapitalized).filter(name => isDirectory(path.join(dirPath, name)));

themes.forEach(theme => {
  const themeDir = path.join(dirPath, theme);
  const groups = fs.readdirSync(themeDir).filter(isCapitalized).filter(name => isDirectory(path.join(themeDir, name)));

  let themeExports = '';

  groups.forEach(group => {
    const groupDir = path.join(themeDir, group);
    const widgets = fs.readdirSync(groupDir).filter(isCapitalized).filter(name => isDirectory(path.join(groupDir, name)));

    widgets.forEach(widget => {
      let widgetFile;
      if (fs.existsSync(path.join(groupDir, widget, `${widget}.tsx`))) {
        widgetFile = path.join(groupDir, widget, `${widget}.tsx`);
      } else if (fs.existsSync(path.join(groupDir, widget, `${widget}.jsx`))) {
        widgetFile = path.join(groupDir, widget, `${widget}.jsx`);
      }

      if (widgetFile) {
        const relativePath = path.relative('src/export', widgetFile).replace(/\\/g, '/');
        themeExports += `export { ${widget} } from '${relativePath.replace(/\.(tsx|jsx)$/, '')}';\n`;
      }
    });
  });

  fs.writeFileSync(path.join(outputDir, `${theme}.js`), themeExports);
});

const indexExports = themes.map(theme => `export * as ${theme} from './${theme}';`).join('\n');
fs.writeFileSync(path.join(outputDir, 'index.js'), indexExports);
