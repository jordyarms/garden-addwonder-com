## Control Operators
Match Group
```regex
( )
```
Match Or Operation
```regex
|
```
## Instance Match Management
Instances = 0 | 1
```regex
?
```
Instances = 0 <
```regex
*
```
Instances = 1 <
```regex
+
```
Instances = Specific Numerical
```regex
{2}
```
Instances = Specific Ranged
```regex
{3,5}
```
## Characters
Escape a character
```regex
\. 
```
Return
```regex
\r
```
Newline
```regex
\n
```
Tab
```regex
\t
```
Digit
```regex
\d
```
Digital Alt
```regex
[0-9]
```
Alphabetic character
```regex
[A-z]
```
Word
```regex
\w
```
Not 
```regex
[^ ]
```
## Positional Control
From the head
```regex
^pattern
```
From the tail
```regex
pattern$
```
Word Boundaries
```regex
\bpattern\b
```
Inside Word Boundaries
```regex
\Bpattern\B
```
## Capture Group Control
Capture Group Control
```regex
(?:prepattern|^)(pattern retrieved)(?:postpattern|$)
```