---
name: code review PR
about: A template PR for contributing to this project
---

<!--
  make this PR easy to find:

  - assign yourself
  - link it to an issue
  - milestones
  - request a review
-->

## Checklists

- [ ] All CI checks pass (for files that were changed)
- [ ] The branch works when you pull it and run it locally

<!--
  here are some more specific checklists for different types of code
  you can delete the checklists that don't apply to your PR
-->

### HTML

- [ ] the code is well-formatted
- [ ] the HTML code passes validation
- [ ] there are no inline styles (example: `style='color: red;'`)
- [ ] there are no `<style>` tags with CSS, all styles are hrefs
- [ ] there is no inline JavaScript (example: `onclick='doSomething()'`)
- [ ] there are no `<script>` tags with JS, all JS is in an separate file
- [ ] `id`s are used for JavaScript only, not for CSS
- [ ] semantic tags are used
- [ ] ARIA labels are used where necessary
- [ ] spelling and grammar is correct in all site content

### CSS

- [ ] the code is well-formatted
- [ ] the code does not use any `#` id's
- [ ] styles are responsive

### JavaScript

- [ ] code is clean and easy to read
- [ ] helpful variable names are used
- [ ] all comments are clear and help to understand the code
- [ ] there is no unused code in comments
- [ ] all file names are helpful and describe what they do
