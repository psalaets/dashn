# dashn

Roughly equivalent to `ruby -ne '<code>' file1 … filen`

## Usage

`dashn -e '<code>' file1 … filen`

### Free Variables

`<code>` can reference any of the following:

line (String) - Current line of input. Trailing newline has been stripped.

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

`dashn -e 'log(line.toUpperCase())' a.txt`

prints

```
DOG
CAT
HOUSE
```

## Installation

TODO submit to npm

## License

MIT