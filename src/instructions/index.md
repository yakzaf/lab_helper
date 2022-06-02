:dataTable{table_id='title' columns='[{ "key": "students", "name": "Students:" } , { "key": "info", "name": "Details: " }]' rows='[{ "students": "", "info": "Date: "} , { "students": "", "info": "Instructor: "} , { "students": "", "info": "Grade: "} , { "students": "", "info": "" }]'}

# Ex. 12 — Microwave Heating

## Determination of Microwave Oven Efficiency

:image{filename='mwave-locs.png' centered='true' caption='Figure 1. Different beaker locations in the microwave'}

Ambient temperature: $t_{amb} = 17.8 \degree C$

Measurements for 200 ml of water (no salt):

:dataTable{table_id='200-nosalt' columns='[{ "key": "loc", "name": "Location" } , { "key": "P", "name": "P [W]" } , { "key": "I", "name": "I [A]" } , { "key": "t", "name": "t [°C]" } , { "key": "n", "name": "η" }]' rows='[{ "loc": "1", "P": "1200", "I": "6", "t": "52.8", "n": "0.61" } , { "loc": "2", "P": "1190", "I": "5.8", "t": "36.2", "n": "0.32" } , { "loc": "3", "P": "1195", "I": "5.4", "t": "36.2", "n": "0.32" } , { "loc": "4", "P": "1194", "I": "5.4", "t": "46.4", "n": "0.5" }]' caption='Table 1. Measurements for 4 workpiece locations for 200 ml of water'}

:chart{table_id='200-nosalt' chart_title='Efficiency - 200ml of Water' x='loc' y='[n]' types='[bar]' ytitle='n' caption='Figure 2. Efficiency chart for different workpiece locations (200ml of water)'}

## Efficiency of Different Materials

Ambient temperature: $t_{amb} = 19.6 \degree C$

Measurements for 200 ml of water (1 tsp of salt):

:dataTable{table_id='200-salt' columns='[{ "key": "loc", "name": "Location" } , { "key": "P", "name": "P [W]" } , { "key": "I", "name": "I [A]" } , { "key": "t", "name": "t [°C]" } , { "key": "n", "name": "η" }]' rows='[{ "loc": "1", "P": "1190", "I": "5.4", "t": "42.1", "n": "0.43" } , { "loc": "2", "P": "1185", "I": "5.2", "t": "37.4", "n": "0.35" } , { "loc": "3", "P": "1185", "I": "5.2", "t": "33.5", "n": "0.28" } , { "loc": "4", "P": "1190", "I": "5.2", "t": "37.9", "n": "0.35" }]' caption='Table 2. Measurements for 4 workpiece locations for 200 ml of water with 1 tsp of salt'}

:chart{table_id='200-salt' chart_title='Efficiency — 200ml of Water (salted)' x='loc' y='[n]' types='[bar]' ytitle='η' caption='Figure 3. Efficiency chart for different workpiece locations (200ml of salted water)'}

Measurements for 400 ml of water (no salt):

:dataTable{table_id='400-nosalt' columns='[{ "key": "loc", "name": "Location" } , { "key": "P", "name": "P [W]" } , { "key": "I", "name": "I [A]" } , { "key": "t", "name": "t [°C]" } , { "key": "n", "name": "η" }]' rows='[{ "loc": "1", "P": "1187", "I": "5.2", "t": "32.8", "n": "0.26" } , { "loc": "2", "P": "1187", "I": "5.2", "t": "32.8", "n": "0.26" } , { "loc": "3", "P": "1187", "I": "5.2", "t": "29.3", "n": "0.2" } , { "loc": "4", "P": "1187", "I": "5.2", "t": "29.6", "n": "0.21" }]' caption='Table 3. Measurements for 4 workpiece locations for 400 ml of unsalted water'}

:chart{table_id='400-nosalt' chart_title='Efficiency — 400ml of Water (no salt)' x='loc' y='[n]' types='[bar]' ytitle='η' caption='Figure 4. Efficiency chart for different workpiece locations (400ml of unsalted water)'}

## Electromagnetic Field Distribution Inside a Heating Chamber

Determining the operating frequency of the microwave oven using thermosensitive paper:

:image{filename='thermopaper.jpg' centered='true' caption='Figure 5. Thermosensitive paper after being subjected to microwave heating'}

Wavelength is determined by measuring the distance between two spots.

$\lambda =\ $:mathInput{id='lambda'} $m$

$c =\ $:mathInput{id='c'}$\ = \lambda * f$

$f = \frac{c}{\lambda} =\ $:mathOutput{target_ids='[lambda, c]' exp='( c / lambda ).toPrecision(11)'} $Hz\ =\ $ :mathOutput{target_ids='[lambda, c]' exp=' (( c / lambda ) / 1000000).toPrecision(5) '} $\ MHz$

Observing the effects of a beaker with 200 ml water placed on the paper during microwave heating:

:image{filename='thermopaper1.jpg' centered='true' caption='Figure 6. Thermosensitive paper with a water beaker after being subjected to microwave heating'}

## Conclusions

:textarea{class='ta-input'}