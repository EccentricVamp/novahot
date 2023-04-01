Combat spell regex:
```regex
^(?<name>[^\(\[]+) ?(?<target>\[[^\]]+\])? ?(?<tags>\([^\)]+\))?(?<book>\*)? (?<type>[MP]) (?<test>O \((?:REA|WIL|BOD|Force|attribute|INT|STR)\)|S \(OR\)|S) (?<range>LOS(?: \(A\))?|T(?:\/(?:D|A|EA))?) ?(?<voluntary>\(V\))? (?<damage>[PS]) (?<duration>[ISP]) (?<drain>\([^\)]+\)(?: [\+\–] \d)?)$
```
```
{\n    "category": "combat",\n    "name": "$name",\n    "target": "$target",\n    "tags": "$tags",\n    "type": "$type",\n    "test": "$test",\n    "range": "$range",\n    "damage": "$damage",\n    "duration": "$duration",\n    "drain": "$drain",\n    "voluntary": "$voluntary",\n    "book": "$book"\n},
```
Spell regex:
```regex
^(?<name>[^\(\[]+) ?(?<target>\[[^\]]+\])? ?(?<tags>\([^\)]+\))?(?<book>\*)? (?<type>[MP]) (?<test>O \((?:REA|WIL|BOD|Force|attribute|INT|STR)\)|S \(OR\)|S) (?<range>LOS(?: \(A\))?|T(?:\/(?:D|A|EA))?) ?(?<voluntary>\(V\))? (?<duration>[ISP]) (?<drain>\([^\)]+\)(?: [\+\–] ?\d)?)$
```
```
{\n    "category": "detection",\n    "name": "$name",\n    "target": "$target",\n    "tags": "$tags",\n    "type": "$type",\n    "test": "$test",\n    "range": "$range",\n    "duration": "$duration",\n    "drain": "$drain",\n    "voluntary": "$voluntary",\n    "book": "$book"\n},
```
Augmentation Modification:
```regex
^(?<name>.+) (?<essence>—|\+?[\d\.]+) (?<capacity>—|\+?\[?\d+\]?) (?<availability>\+\d+) (?<cost>\+[\d,]+¥|.+) p. (?<page>\d*)
```
```
{\n    "type": "",\n    "category": "",\n    "name": "",\n    "essence": "",\n    "capacity": "",\n    "availability": "",\n    "cost": "",\n    "page": "",\n    "book": ""\n}
```
Augmentation:
```regex
^(?<name>.+) (?<essence>—|(?:Rating x )?[\d\.]+) (?<capacity>—|(?:Rating x )?(?:\d+\/)?\[?\d+\]?\**|\[Rating ?\]|\[Rating per limb\]|\*) (?<availability>—|\(?(?:Rating x )?[\d–]+\)?[FR]?) (?<cost>[\d,]+¥|.+) p. (?<page>\d*)(?<book>, \w+)?
```
```
{\n    "type": "",\n    "category": "",\n    "name": "$name",\n    "essence": "$essence",\n    "capacity": "$capacity",\n    "availability": "$availability",\n    "cost": "$cost",\n    "page": "$page",\n    "book": "$book"\n},
```
Augmentation Suite:
```regex
^(?<name>.+) (?<essence>—|(?:Rating x )?[\d\.]+) (?<availability>—|\(?(?:Rating x )?[\d–]+\)?[FR]?) (?<cost>[\d,]+¥|.+) p. (?<page>\d*)(?<book>, \w+)?
```
```
{\n    "type": "",\n    "category": "",\n    "name": "$name",\n    "essence": "$essence",\n    "availability": "$availability",\n    "cost": "$cost",\n    "page": "$page",\n    "book": "$book"\n},
```
Genetech:
```regex
^(?<name>.+) (?<time>(?:[\d–]+ (?:months?|weeks?)\+?)?[\d–]+ (?:months?|weeks?)\+?|[\d\.]+ Essence per month) (?<essence>—|(?:Rating x )?[\d\.\–]+\+?) (?<availability>—|\(?(?:Rating x )?[\d–]+\)?[FR]?\*?) (?<cost>[\d,]+¥(?:\/week)?|.+) p. (?<page>\d*)(?<book>,? \w+)?
```
Nanoware:
```regex
^(?<name>.+) (?<type>Hard|So|Hard\/So|So \/Hard) (?<availability>—|\(?(?:Rating x )?[\d–]+\)?[FR]?\*?) (?<cost>[\d,]+¥(?:\/week)?|.+) p. (?<page>\d*)(?<book>,? \w+)?
```
```
{\n    "name": "$name",\n    "type": "$type",\n    "availability": "$availability",\n    "cost": "$cost",\n    "page": "$page",\n    "book": "$book"\n},
```