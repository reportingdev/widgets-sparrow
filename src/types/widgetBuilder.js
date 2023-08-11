"use strict";
exports.__esModule = true;
var Kpi_stories_1 = require("./stories/KPI/Kpi.stories");
Object.keys(Kpi_stories_1.Primary).forEach(console.log);
/*
I need to write a tech docs guide walking a user through creating new widgets for a software platform called reporting.dev. Assume you are writing the docs for me and ask questions if you need help. Any text in parentheses below is meant to help you write the content. Leverage the bullet point list below to write the documentation:

Setup: 
- The user needs to be familiar with Storybook.js and the Component Story Format (CSF) as each widget needs to be documented (including argTables) to be able to be imported
- The widgets can be built in any frontend framework, as long as CSF is followed (though react is preferred)

Report.dev props
- There are 3 reserved properties that are internally used by reporting.dev: data, onChange, and loading
- the data property contains a 2d array of data that is used to power the widget. (refer to the types code below for reference). This property is used by reporting.dev to pass in data used by the widget. 
- the loading property is a boolean that tells the user when new data is being loaded for `data`. This is useful for when the developer wants to create a loading state for the widget.
- the onChange property is a callback function that should be called whenever an action happens from the widget (like a data picker being changed). This onChange callback function is used by reporting.dev to refresh data or change/filter data whenever an action in a widget is taken. 
- In addition to the standard argTable properties defined by storybook, users are expected to add a `widgetConfig` property that takes an object of settings that reporting.dev uses to know which functionality is used by the widget. Here's a sample: widgetConfig: {data: false, changeRate: false,action: false,defaultSize: 'auto'}
- the `title` property on the main story export object should be 3 levels deep in a format like this: `Tremor/Display/BarChart` Where Tremor is the Theme the widget will be part of, Display is the group the widget will exist in within that theme, and BarChart being the name of the widget. We use this label to group your widgets within the reporting.dev UI. 
- You can test your widget by running `npm run storybook` like you would a normal storybook instance. Reporting.dev hooks into the add-on panel that storybook has baked in, so if everything is working there, then everything will work in reporting.dev.
- Whenever you merge in changes to your main or master branch, the reporting.dev build script will run and push your latest widgets to our CDN and API. This will ensure your existing widgets are updated in production, and your new widgets become available in the reporting.dev editor. 


*/