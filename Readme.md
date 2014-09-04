# Wikiship

This module is heavily associated with convention.

Parses a markdown based wikis "_Progress.md", looks for lines that contain ![][N]
where N is a number represent a percentage

Removes lines that are < 50

Removes the code saying ![][N]

The idea is that you can have a wiki page called _Progress which shows progress bars, 
and then deploy from __Progress to Home.jade 

Simply place this at the bottom of your _Progress.md file

```
<!-- progress bar image "macros" -->

[0]: http://progressed.io/bar/0
[10]: http://progressed.io/bar/10
[20]: http://progressed.io/bar/20
[30]: http://progressed.io/bar/30
[40]: http://progressed.io/bar/40
[50]: http://progressed.io/bar/50
[60]: http://progressed.io/bar/60
[70]: http://progressed.io/bar/70
[80]: http://progressed.io/bar/80
[90]: http://progressed.io/bar/90
[100]: http://progressed.io/bar/100
```


