# dashn

Roughly equivalent to `ruby -ne '<code>' file1 … filen`

## Install

TODO submit to npm

## Usage

`dashn -e '<code>' file1 … filen`

## Free Variables

`<code>` can reference any of the following

### line

Current line from input files. Trailing newline has been stripped.

## Example

Given file `a.txt` containing

```
dog
cat
house
```

Running

`dashn -e 'console.log(line.toUpperCase())' a.txt`

prints

```
DOG
CAT
HOUSE
```

## License

MIT