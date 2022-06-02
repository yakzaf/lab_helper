# Lab Helper - Cheat Sheet
Author: Zafar Yakubov

This page serves as a cheat sheet/guide on the capabilities of Lab Helper and its syntax for quick reference during document creation.

## Basic Markdown Syntax

### Headings

In the order of diminishing size:

```
# H1
## H2
### H3
```

### Text formatting

*Italicized* text is surrounded by one asterisk:

```
*Italicized* text is surrounded by one asterisk
```
___
**Bold** text is surrounded by two asterisks:

```
**Bold** text is surrounded by two asterisks
```
___
`Code blocks` are wrapped in backticks:

```
`Code blocks` are wrapped in backticks
```

### Lists

Ordered Lists are straightforward:

1. Item 1
2. Item 2
3. Item 3

```
1. Item 1
2. Item 2
3. Item 3
```
___

For unordered lists, you can use either asterisks or dashes:

- Item 1

* Item 2

- Item 3

```
* Item 1
- Item 2
* Item 3
```

## Extended Markdown Syntax

### Data Tables

Data tables are created with a `:dataTable{}` keyword. Inside the curly brackets required parameters include `table_id`, `columns`, and `rows`, which are defined with only spaces in between. The values of parameters have to be enclosed in single quotes `'`. `columns` parameter value is defined in the following format: `[{ "key": "your_key_1", "name": "Column 1 name" } , {"key": "your_key_2", "name": "Column 2 name"}]`, where `key` is the underlying parameter used as reference and `name` is the value that is displayed on the screen. `rows` parameter value is defined in the following format `[{ "your_key_1": "0" , "your_key_2": "" } , {"your_key_1": "1", "your_key_2": ""}]`, where each predefined `key` value specified in `columns` is placed on the left side of the colon, and their assigned values are specified on the right side. In order to create an empty row for students to fill out, the double-quotes on the right side are left empty `""`. 

**!It is crucial to remember that each `{}` object in `columns` and `rows` is separated by a comma surrounded by space symbols!**

**Correct:**

`{} , {}`

**Incorrect:**

`{}, {}` 

`{} ,{}` 

`{},{}`

:dataTable{table_id='table-1' columns='[{ "key": "id", "name": "Column 1" } , { "key": "x", "name": "Column 2" } , { "key": "y", "name": "Column 3" }]' rows='[{ "id": "0", "x": "", "y": "" } , { "id": "1", "x": "", "y": "" } , { "id": "2", "x": "", "y": "" }]'}

```
:dataTable{table_id='table-1' columns='[{ "key": "id", "name": "Column 1" } , { "key": "x", "name": "Column 2" } , { "key": "y", "name": "Column 3" }]' rows='[{ "id": "0", "x": "", "y": "" } , { "id": "1", "x": "", "y": "" } , { "id": "2", "x": "", "y": "" }]'}
```

___

### Charts

Charts are created with a `:chart{}` keyword. The required parameters are: 
* `table_id` — specifies the table to visualize data from,
* `chart_title` — defines the chart's title,
* `x` — specifies the column key to use for X axis,
* `y` — specifies the column key to use for Y axis; takes in more than 1 key for multiple traces. Written in form of `[key1, key2, ...etc]`
* `ytitle` — defines the title of the Y axis,
* `types` — defines a type for each trace. Supported types are: `scatter`, `line`, `bar`, `waterfall`. Written in form of `[type1, type2, ...etc]`

:chart{table_id='table-1' chart_title='Chart Title' x='x' y='[y]' types='[scatter]' ytitle='y axis title'}

```
:chart{table_id='table-1' chart_title='Chart Title' x='x' y='[y]' types='[scatter]' ytitle='y axis title'}
```

___

### Falstad Electronic Circuit Simulator

Circuit simulator component is added via `:circuitSim{}` keyword.

:circuitSim{}

```
:circuitSim{}
```

___

### JavaScript Code Parser

JavaScript parser component can be created via `:jsParser{}` keyword.

:jsParser{}

```
:jsParser{}
```

___

### Mathematical Expression Formatting

Lab Helper uses common LaTeX syntax for mathematical expressions. They are enclosed in `$` (single dollar sign) for inline parsing and `$$` (double dollar sign) for centered output in a new line.

For syntax details refer to LaTeX Wiki: https://en.wikibooks.org/wiki/LaTeX/Mathematics

$$
L = \frac{1}{2} \rho v^2 S C_L
$$

```
$$
L = \frac{1}{2} \rho v^2 S C_L
$$
```

___

### Mathematical Expression Fields

Lab Helper has two types of custom text fields for mathematical expression evaluation: `:mathInput{}` and `:mathOutput`.

* `mathInput` must receive an `id` attribute
* `mathOutput` must receive a list of `mathInput` id's to target in `target_ids` attribute and a mathematical expression to evaluate in `eq`, where the variables used in the expression must correspond to the elements in the `target_ids` list. The whole string expression attributed to `eq`, as well as the id's in the expression **MUST** be surrounded by spaces.

:mathInput{id='x'}

:mathInput{id='y'}

:mathOutput{target_ids='[x, y]' exp=' x + y '}

```
:mathInput{id='x'}

:mathInput{id='y'}

:mathOutput{target_ids='[x, y]' exp=' x + y '}
```

### Image Insertion

An image can be added to its designated `public` folder and inserted into the document via `![alt-text](filename)` syntax.