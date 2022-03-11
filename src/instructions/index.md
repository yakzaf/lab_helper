A paragraph with *emphasis* and **strong importance**.
> A block quote with ~strikethrough~ and a URL: https://reactjs.org.
* Lists
* [ ] todo
* [x] done

A table:

|   a  |   b   | c |
| - | - | - |
| :input{id=input-test-11 class='test-class'} | :input{.input-test-12} | :input{.input-test-13} |
| :input{.input-test-21} | :input{.input-test-22} | :input{.input-test-23} |

Datagrid test:
:::div{id='parent'}
:dataTable{class='asdfdfsdfdsfsdfsf' table_id='table1' columns='[{ "key": "id", "name": "ID" } , { "key": "x", "name": "T564651itleasdf" } , { "key": "y", "name": "TestCol" }]' rows='[{ "id": "0", "x": "", "y": "" } , { "id": "1", "x": "", "y": "" } , { "id": "2", "x": "", "y": "" }]'}
this is a test of a datagrid blah blah blah
:::
:dataTable{class='test' table_id='table2' columns='[{ "key": "id", "name": "ID" } , { "key": "x", "name": "Titleasdf" } , { "key": "y", "name": "TestCol" }]' rows='[{ "id": "0", "x": "", "y": "" } , { "id": "1", "x": "", "y": "" } , { "id": "2", "x": "", "y": "" }]'}

:chart{table_id='table1' plot_title='table1' type='scatter' x='id' y='[x]'}
:chart{table_id='table2' plot_title='table2' type='scatter' x='x' y='[id, y]'}
