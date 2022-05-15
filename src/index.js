import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { BrowserRouter as Router } from "react-router-dom";
import App from './components/App/App';

function Test () {
  return <div style={{width:'100%', maxWidth:1248, margin:'0 auto'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer purus erat, feugiat ut libero eget, fermentum pharetra lorem. Proin dapibus volutpat augue, in viverra turpis mattis quis. Nunc eget ex eu erat auctor semper. Vivamus lectus ante, dapibus eget sollicitudin ac, commodo at tortor. Vivamus fermentum dolor et blandit dictum. In sit amet tempor metus. Nam maximus tempor cursus. Praesent sed justo scelerisque nisi interdum malesuada eget in neque. In et justo gravida, elementum metus at, malesuada ipsum. Sed et velit commodo, scelerisque mi ac, dictum lacus. In hendrerit, magna quis cursus sodales, risus velit ornare mi, vel tempor massa urna iaculis sem.

  Sed eleifend lacinia mollis. Vivamus condimentum justo et tristique eleifend. Suspendisse pellentesque purus vel felis viverra molestie. Cras sagittis sapien nec magna posuere mollis. Aliquam vel tempus ex. Aliquam convallis, sem non congue congue, ante sapien convallis diam, et porta nunc metus a erat. Ut elit erat, dignissim id magna ut, mattis porttitor turpis. Maecenas non velit tortor. Etiam posuere porttitor ante a congue. Cras et ullamcorper diam, blandit porta lectus. Morbi diam lacus, viverra vel eros ac, bibendum varius diam. Praesent sed ipsum quis justo tristique tristique.
  
  Ut neque ipsum, luctus non ante eu, viverra tempor libero. Nunc libero risus, ultricies et mi nec, blandit consequat sem. Suspendisse viverra in ipsum at molestie. Aliquam volutpat tellus et venenatis pellentesque. Nunc dignissim nisl id lobortis pellentesque. Sed sodales cursus rhoncus. Pellentesque a venenatis purus, finibus lacinia massa. Cras nec augue eu nisi sodales ultrices.
  
  Aenean ac lectus quis sapien ultrices imperdiet. In vitae risus sit amet diam rutrum pellentesque vel nec velit. Integer pellentesque lectus id aliquam euismod. Curabitur accumsan turpis et egestas sodales. In nisi erat, ultricies non sem id, tincidunt ultrices ante. Mauris ut interdum urna. Pellentesque ut mollis orci.
  
  Duis gravida orci magna, ac tincidunt mi ornare quis. Donec eget magna ipsum. Vivamus vehicula iaculis tincidunt. Etiam tincidunt bibendum nulla. Nunc ut euismod justo. Curabitur quis massa ut eros volutpat viverra. Ut aliquet pharetra mauris, sit amet mattis massa varius a. Morbi dignissim, elit at vestibulum mollis, velit leo varius mi, sed fermentum tortor ante eu turpis. Sed posuere fringilla enim in scelerisque. Sed eleifend sem ut convallis vestibulum. Nullam imperdiet nulla ante, vel ultricies sapien pharetra quis.
  
  Morbi feugiat efficitur est, sit amet pulvinar lorem aliquet non. In dictum sem ac ornare tristique. Vestibulum pharetra velit ut enim feugiat fringilla. Sed sit amet eros vel nibh semper dignissim et sit amet magna. Ut tellus augue, laoreet faucibus nisl vitae, convallis semper neque. Vivamus accumsan lacinia sodales. Curabitur quis sapien gravida, porttitor neque id, auctor massa. Ut vel molestie ex. Mauris lacinia libero non orci vulputate, interdum rutrum nisi porta. Sed auctor nec odio ac fringilla.
  
  Phasellus elit risus, ullamcorper nec hendrerit eget, cursus non massa. Phasellus eu velit sodales, tempor elit eget, commodo elit. Aenean tincidunt magna ac felis euismod eleifend. Cras nisi diam, venenatis quis ultricies eget, aliquam non ante. Sed sit amet elit in tellus ultrices luctus. Ut ac mollis augue. Aliquam dapibus ornare suscipit.
  
  Suspendisse at ipsum et magna eleifend pharetra. Duis tincidunt lectus a ullamcorper congue. Donec lacus est, faucibus vel vehicula a, viverra ac nisl. Fusce tincidunt sollicitudin purus in porttitor. Proin pretium gravida ex sed finibus. Cras condimentum porta elit eu tincidunt. Mauris lacinia ante id tellus gravida, tincidunt volutpat ligula tempor.
  
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas finibus molestie pharetra. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aenean nec mi nec turpis imperdiet lacinia tincidunt quis felis. Etiam molestie elit at sollicitudin dignissim. Donec tristique nisi ut lacus viverra, nec ultrices lacus aliquet. Sed posuere sapien vitae erat eleifend, eu fermentum tortor faucibus. Duis ac ligula nulla. Praesent nec mi elit. Vestibulum quis nulla at quam sollicitudin aliquet at non risus. Duis eget nisl sed ligula commodo consequat. Donec scelerisque vehicula magna id bibendum. Fusce eget tincidunt velit. Vestibulum purus lorem, maximus ac gravida sit amet, tincidunt pellentesque mauris. Quisque vitae hendrerit nisi.
  
  Vestibulum congue id nulla eget placerat. Morbi commodo, turpis eget scelerisque tempor, lacus quam vehicula magna, et faucibus erat lacus ut elit. Sed ullamcorper quis felis varius mattis. Nam pretium cursus dui, nec finibus massa euismod vitae. Donec scelerisque congue vestibulum. Praesent dapibus est eget imperdiet volutpat. In auctor tellus arcu, in vehicula ligula varius vel. Suspendisse tempor auctor odio, ac sodales metus luctus vel. Quisque bibendum leo nec magna blandit condimentum. Vivamus odio ex, congue sed purus eu, interdum malesuada tortor. Sed pellentesque at sapien a tempus. Sed eget risus eu libero semper bibendum. Duis pulvinar ligula erat, non tristique dui faucibus nec.
  
  Ut ut volutpat libero. Vivamus odio mauris, cursus id ultrices vel, auctor vel orci. Sed hendrerit semper augue quis vehicula. Ut tincidunt massa ut mi blandit consectetur. Aenean auctor lacinia nisl, sit amet venenatis nisi cursus blandit. Ut a tortor orci. Aenean facilisis ligula diam, vitae sollicitudin nisl mattis at.
  
  Nunc dapibus tristique nibh eget faucibus. Donec at elit a urna aliquet congue eget sed dolor. Proin posuere justo purus. Nulla vel placerat nisi. Curabitur a velit semper, suscipit mauris imperdiet, dictum libero. Suspendisse aliquet vehicula odio, at fringilla diam ullamcorper nec. Suspendisse potenti. Sed sit amet leo odio. Morbi facilisis consectetur felis. Etiam venenatis lorem quis tempor accumsan. Nam gravida augue orci, at hendrerit sapien vehicula sit amet. Nullam fringilla sem et nunc tempor aliquet. Fusce quis risus consequat, tempor lorem vel, pretium metus.
  
  Nunc eleifend sem porttitor, gravida augue vel, tincidunt odio. Etiam urna sem, dictum eu cursus rhoncus, euismod quis sem. Nunc dictum finibus erat in tempor. Morbi et lectus sit amet sem aliquet fringilla. Mauris interdum id augue et dignissim. Sed consectetur enim purus, id fermentum nisl iaculis eu. Fusce et urna at mi aliquet rutrum. Nam non eros quam. Proin nec ipsum nunc. Aliquam non lacinia purus, non tristique ligula. Maecenas sodales est a mattis vestibulum. Ut massa massa, vestibulum a gravida ut, ultricies a orci. In iaculis libero fringilla lectus malesuada, ac consequat velit vulputate. Quisque metus eros, suscipit vel sodales a, pharetra ac quam.
  
  Suspendisse sed ipsum consequat, venenatis sapien sed, consectetur mi. Nam sodales consectetur tellus ac tristique. Phasellus congue dolor quis tellus condimentum imperdiet. Ut feugiat ex ante, ac dictum lorem rutrum id. Donec eu aliquam nibh. Fusce pellentesque scelerisque turpis, id pharetra risus sollicitudin sed. Fusce volutpat justo eu sapien semper, eu semper lorem pharetra. Sed eu est ut felis tempus facilisis eget quis mi. Nam sit amet porta augue, non eleifend diam. In hac habitasse platea dictumst. Duis malesuada ligula et est tincidunt rutrum. Donec facilisis enim odio, in porta massa ultrices in. Integer condimentum vulputate sapien, at tincidunt urna luctus ut. Nunc vitae faucibus nunc, quis scelerisque arcu.
  
  Morbi eleifend convallis lectus, ac dignissim lectus porttitor id. Sed nec ipsum cursus turpis egestas molestie eu vel urna. Aenean vitae nulla eros. Mauris in imperdiet dolor. Donec porta dui vel leo porta, a pulvinar nunc pretium. Proin non magna non sapien rhoncus egestas quis sed velit. Sed eleifend cursus tortor, vitae accumsan lacus congue non. Donec fringilla, dui lobortis hendrerit vestibulum, turpis arcu pulvinar eros, tempor dignissim odio lorem et dolor. Nullam venenatis lorem quis placerat tempus. Mauris iaculis lectus vel leo sagittis mollis.
  
  Mauris porttitor finibus quam et ornare. Proin vel aliquet urna. Morbi ut varius eros. Phasellus non mauris leo. Phasellus venenatis gravida euismod. In et tincidunt sapien, ut dictum metus. Donec porttitor, turpis at aliquam condimentum, libero felis tristique velit, non viverra leo purus vitae erat. Nulla facilisi. Vivamus sed posuere ex. Maecenas eget ex in nulla porta tristique. Curabitur vel lacus pharetra, imperdiet est at, mattis dui. Pellentesque malesuada sapien quis dolor vehicula, eu mattis nunc mattis. Morbi mattis blandit tellus, eu faucibus eros dignissim ac.
  
  Nullam elementum sem vel lacus luctus, sed aliquet augue elementum. Curabitur volutpat volutpat nulla eu luctus. Donec quis arcu eget arcu laoreet ultricies ac imperdiet augue. Cras malesuada pretium mi vitae laoreet. Nullam convallis, diam at pretium ornare, ipsum sapien convallis odio, sed porta massa orci eget nisi. Praesent placerat eros ut elit feugiat faucibus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vitae nisi sed sapien mattis tincidunt. Sed leo odio, lobortis id hendrerit eget, porta non nibh. Etiam pharetra magna nec velit interdum finibus.
  
  Ut feugiat dapibus elit, sit amet hendrerit metus tincidunt at. Suspendisse eget leo tellus. Etiam ante lacus, vehicula et euismod et, sollicitudin vitae eros. Sed porta quam quis lectus porttitor mattis nec ut velit. Sed gravida venenatis ligula ac condimentum. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Vestibulum id dictum neque. Aliquam vestibulum egestas tincidunt. Nulla ipsum nunc, congue ut nisl a, maximus ornare est. Nam eu fringilla erat. Mauris dictum eu tellus sit amet feugiat.
  
  Proin ut aliquet quam, ut pharetra sem. Maecenas pretium quis orci a molestie. Suspendisse potenti. Suspendisse elementum volutpat justo quis mattis. Vivamus molestie eu magna eu laoreet. Phasellus viverra gravida libero quis elementum. Nullam vel nunc consectetur, luctus nibh eu, ornare purus. Quisque nec auctor nisi. Cras ante turpis, ullamcorper vitae odio vitae, ultrices lobortis ligula. Aenean ex ante, tincidunt sed gravida eget, hendrerit quis magna. In vehicula non nulla eu scelerisque. Sed commodo a enim eget vulputate. Aenean non feugiat justo. Nam condimentum purus ligula, vitae feugiat lorem rutrum vel.
  
  Suspendisse egestas pulvinar urna quis sagittis. Vestibulum in luctus urna. Pellentesque vel vulputate sem. In id erat vel nisi dignissim placerat. Nam hendrerit tempus nisl a elementum. Donec molestie augue arcu, non ullamcorper lorem laoreet eget. Mauris consectetur arcu in tortor consequat, quis feugiat turpis lobortis. Donec nibh tellus, eleifend eget velit et, lobortis semper purus. Proin consectetur leo eleifend maximus hendrerit. Maecenas mauris purus, gravida in pretium in, rutrum non odio. Aenean elementum varius nibh eget dapibus.</div>
}

const root = createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <App/> 
      <Test />
    </Router>

  </React.StrictMode>
);

