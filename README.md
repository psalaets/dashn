# dashn

From the command line, run code for every line in some text.

Roughly equivalent to `ruby -ne '<code>' file1 … filen`.

## Usage

### Read from files

`dashn '<code>' file1 … filen`

### Read from stdin

`cat a.txt | dashn '<code>'`

### Free Variables

`<code>` can reference any of the following:

line (String) - Current line of input. Trailing newline has been stripped.

num (Number) - Current line number of input. Starts at 1.

log (Function) - Alias for `console.log`.

error (Function) - Alias for `console.error`.

## Example

Given file `a.txt` containing

```
dog
cat
house
```

Running

`dashn 'log(line.toUpperCase())' a.txt`

prints

```
DOG
CAT
HOUSE
```

## Installation

`npm install -g dashn`

## License

MIT
