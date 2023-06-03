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
Melee Weapons:
```regex
^(?<name>.+) (?<reach>-|—|\d+) (?<damage>(?:\([^\)]+\)|\d+)(?:P|S|P or S)(?:\(e\))?|—) (?<penetration>—|[–+]?\d+|–half) (?<availability>—|\d+)(?<legality>[RF])? (?<cost>[\d,]+)¥ (?<page>\d+)(?<book>, .+)?
```
```
{"type":"melee","category":"unarmed","name":"$name","reach":"$reach","damage":"$damage","penetration":"$penetration","availability":"$availability","legality":"$legality","cost":"$cost","page":"$page","book":"$book"},
```
Throwing Weapons:
```regex
^(?<name>.+) (?<damage>(?:\([^\)]+\)|\d+)(?:P|S|P or S)(?:\(e\))?|—) (?<penetration>—|[–+]?\d+|–half) (?<availability>—|\d+)(?<legality>[RF])? (?<cost>(?:Rating x )?[\d,]+)¥ (?<page>\d+)(?<book>, .+)?
```
```
{"type":"melee","category":"throwing","name":"$name","damage":"$damage","penetration":"$penetration","availability":"$availability","legality":"$legality","cost":"$cost","page":"$page","book":"$book"},
```
Ranged Weapons:
```regex
^(?<name>.+) (?<damage>(?:\([^\)]+\)|\d+)(?:P|S|P or S)(?:\(e\))?|Grenade|As Mortar Round|Rocket|Missile|Mortar|—) (?<penetration>[–+]?\d+|–half|Rocket|Missile|Grenade|Mortar|—) (?<mode>[\w\/]+\*?|—) (?<recoil>\(?\d+\)?(?: ?\(\d+\))?|—) (?<ammo>\d+|Special|External source|—)(?<reload> ?\(\w+\)(?: or external source| or \d+ \(belt\)| or belt| \+ Energy)?)? (?<availability>\d+|—)(?<legality>[RF])? (?<cost>(?:Rating x )?[\d,]+)¥(?<page> \d+)?(?<book>, .+)?
```
```
{"type":"ranged","category":"missile launchers","name":"$name","damage":"$damage","penetration":"$penetration","mode":"$mode","recoil":"$recoil","ammo":"$ammo","reload":"$reload","availability":"$availability","legality":"$legality","cost":"$cost","page":"$page","book":"$book"},
```