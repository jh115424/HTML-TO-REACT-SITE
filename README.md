# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh





## In order to pass this assignment you should

Note:
_You can copy and paste these checklists into your new repository and fill them out to make sure that you solved everything we are asking for_

### Standard Requirements

- [ ] Setup eslint - DONE
- [ ] Pass all linting checks
- [ ] Format code with prettier -DONE
- [ ] State should not be duplicated
- [ ] Variables should be named logically
- [ ] No unnecessary console logs
- [ ] No commented out blocks of code (Code comments are fine)
- [ ] Setup a github repository with your submission as the `main` branch, you will submit a link to this for grading (Not a Zip File)

### Assignment Specific Requirements

- [ ] Set up a react app using Vite - DONE
- [ ] draw out your component tree in excalidraw -DONE
  - note: See [This Video](https://www.loom.com/share/13ad514f0d804dfeac6c1e487b2ae3dd) on how to submit
- [ ] Get your react app to look EXACTLY the same as this html project
- [ ] Use props to customize components that are being used
- [ ] Use conditional rendering to render odd rows as dark and even rows as light with the "light" | "dark" class names - DONE
- [ ] Abstract any REPEATED UI into Components
- [ ] Use per-component CSS imports -DONE

  For example if you have a `CharacterCard.css` you can have an import that looks like so

```jsx
import "./some-css-file";

function CharacterCard() {
  // code goes here
}
```

- [ ] Have at least one Class Component that uses props - DONE
- [ ] Have at least one Functional Component that uses props- DONE
- [ ] Transform the original data to get the data you want for each component - DONE
  - The characters in the table should be sorted by votes as shown in the html app
  - The characters table should only show the first top 5 characters
  - The character cards should show all characters, and does not need to be sorted
  - We should be passing our array of characters (the data array) from the top to the children
  - You can transform that data either before or after sending it to the child component
