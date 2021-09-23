Term
  = s:Single { return s; }
  / "(" _ t:Term _ ")" { return t; }
  / ab:Abstraction { return ab; }
  / ap:Application { return ap; }  

Abstraction
  = "λ" _ arg:Name _ "." _ body:Term {
  	return {
      "type": "abstraction", 
      "arg": arg,
      "body": body
    };
  }

Application
  = "(" _ left:Term _ right:Term _ ")" {
  	return {
      "type": "application", 
      "left": left,
      "right": right
    };
  }

Single
  = name:Name {
  	return {
      "type": "single", 
      "name": name
    };
  }
 
Name
  = [a-z]+ {
    return text()
  }

_ "whitespace"
  = [ \t\n\r]*