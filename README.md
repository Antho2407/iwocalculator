# iwocalculator

https://antho2407.github.io/iwocalculator/

## Technology choices

- Used React as the JS framework to match the one used at Iwoca (we all love React)
- Typescript was useful to type props, make sure unit tests were rendering the components with the correct options, and type the repayment calculations
- Styled components was a neat way to separate styles in their own folders, and keep components independent / exportable
- Unit tests are using Jest / Enzyme (could use react testing library) and are sitting nicely in the same folders as the components.
- Added hooks to make sure each new push would run unit tests first before pushing to the remote. With more time, some specs could do more than just checking snapshots, but I focused on getting coverage on all components and the calculation utils
- No time for e2e, but we could use some quick Cypress in there ;)

## Architecture

- I decided to separate the app into components that could potentially be reused
- FieldRow could include any kind of form input for instance
- The repayment calculations are separated, and passed to the Product component, that will format and display the tuples nicely.
- Tried to use the Iwoca logo colors but it ended being a bit flashy ;)
- Did not have time for the bonus exercice, and decided to focus on something that would be tested and cover most of the use cases, let me know what you think ! This would just require a fetch call when mounting the app (lifecycle, or hook if functional component), and then render the right product components based on the API results and the state
