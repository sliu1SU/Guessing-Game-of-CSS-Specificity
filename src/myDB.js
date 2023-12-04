const db = {
    '#': {
        title: '"#": id selector',
        description: 'The CSS ID selector matches an element based on the value of ' +
            'the element\'s id attribute. In order for the element to be selected, its ' +
            'id attribute must match exactly the value given in the selector.'
    },
    '.': {
        title: '".": class selector',
        description: 'The CSS class selector matches elements based on the contents' +
            ' of their class attribute.'
    },
    'tag': {
        title: '"tag": tag selector',
        description: 'In HTML, a tag is used for creating an element.'
    },
    ':first-child': {
        title: '":first-child"',
        description: 'The :first-child CSS pseudo-class represents the first element ' +
            'among a group of sibling elements.'
    },
    ':last-child': {
        title: '":last-child"',
        description: 'The :last-child CSS pseudo-class represents the last element among ' +
            'a group of sibling elements.'
    },
    ':nth-child(even)': {
        title: '":nth-child(even)"',
        description: 'The :nth-child() CSS pseudo-class matches elements based on the indexes' +
            ' of the elements in the child list of their parents. In other words, the :nth-child()' +
            ' selector selects child elements according to their position among all the sibling' +
            ' elements within a parent element.'
    },
    ':nth-child(odd)': {
        title: '":nth-child(odd)"',
        description: 'The :nth-child() CSS pseudo-class matches elements based on the indexes' +
            ' of the elements in the child list of their parents. In other words, the :nth-child()' +
            ' selector selects child elements according to their position among all the sibling' +
            ' elements within a parent element.'
    },
    ':active': {
        title: '":active"',
        description: 'The :active CSS pseudo-class represents an element ' +
            '(such as a button) that is being activated by the user. When using a mouse,' +
            ' "activation" typically starts when the user presses down the primary mouse button.'
    },
    ':checked': {
        title: '":checked"',
        description: 'The :checked CSS pseudo-class selector represents any ' +
            'radio (input type="radio"), checkbox (input type="checkbox"), ' +
            'or option (option in a select) element that is checked or ' +
            'toggled to an on state.'
    },
    ':visited': {
        title: '":visited"',
        description: 'The :visited CSS pseudo-class applies once the link has been visited by the user.' +
            ' For privacy reasons, the styles that can be modified using this selector are very limited.' +
            ' The :visited pseudo-class applies only to "a" and "area" elements that have an href attribute.'
    },
    ':hover': {
        title: '":hover"',
        description: 'The :hover CSS pseudo-class matches when the user interacts with an ' +
            'element with a pointing device, but does not necessarily activate it. It is ' +
            'generally triggered when the user hovers over an element with the cursor ' +
            '(mouse pointer).'
    },
    '::before': {
        title: '"::before"',
        description: 'In CSS, ::before creates a pseudo-element that is the first child' +
            ' of the selected element. It is often used to add cosmetic content to an element' +
            ' with the content property. It is inline by default.'
    },
    '::after': {
        title: '"::after"',
        description: 'In CSS, ::after creates a pseudo-element that is the last child of the selected' +
            ' element. It is often used to add cosmetic content to an element with the content property.' +
            ' It is inline by default.'
    },
    '::first-letter': {
        title: '"::first-letter"',
        description: 'The ::first-letter CSS pseudo-element applies styles to the first letter' +
            ' of the first line of a block container, but only when not preceded by other content ' +
            '(such as images or inline tables).'
    },
    '::first-line': {
        title: '"::first-line"',
        description: 'The ::first-line CSS pseudo-element applies styles to the first ' +
            'line of a block container.'
    },
    ' ': {
        title: '" ": Descendant combinator',
        description: 'The descendant combinator — typically represented by a single space (" ")' +
            ' character — combines two selectors such that elements matched by the second selector' +
            ' are selected if they have an ancestor (parent, parent\'s parent, parent\'s parent\'s' +
            ' parent, etc.) element matching the first selector. Selectors that utilize a descendant' +
            ' combinator are called descendant selectors.'
    },
    ' > ': {
        title: '">": Child combinator',
        description: 'The child combinator (>) is placed between two CSS selectors. It matches' +
            ' only those elements matched by the second selector that are the direct children' +
            ' of elements matched by the first.'
    },
    ' + ': {
        title: '"+": Next-sibling combinator',
        description: 'The next-sibling combinator (+) separates two selectors and matches' +
            ' the second element only if it immediately follows the first element, and both ' +
            'are children of the same parent element.'
    },
    ' ~ ': {
        title: '"~": Subsequent-sibling combinator',
        description: 'The subsequent-sibling combinator (~) separates two selectors and ' +
            'matches all instances of the second element that follow the first element ' +
            '(not necessarily immediately) and share the same parent element.'
    },
}

export default db;