{
function buildApplicationTree(items) {
  return items.map(item=>item[1])
    .reduce((result, element)=>{
      return {
        "type": "application",
        left: result,
        right: element
      }
  });
}
}

Term
  = s:Single { return s; }
  / "(" _ t:Term _ ")" { return t; }
  / ab:Abstraction { return ab; }
  / ap:Application { return ap; }

Abstraction
  = "λ" _ arg:Name _ "." _ body:(_ Term _)+ {
  	return {
      "type": "abstraction", 
      "arg": arg,
      "body": buildApplicationTree(body)
    };
  }

Application
  = "(" terms:(_ Term _)* ")" {
  	return buildApplicationTree(terms)
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