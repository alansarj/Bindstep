/**
 * Created by Alansarj on 04/01/2015.
 */





$("div.bindstep-content").html(
	"<div class=\"row\">" +
	"<div class=\"col-sm-12\">" +
	"<div class=\"page-header page-header-with-icon no-mg-t\">" +
	"<i class=\"fa fa-star\"></i>" +
	"<h2>" +
	"tutorias" +
	"<small>Aqui voce encontra o que deseja aprender.</small>" +
	"</h2>" +
	"</div>" +
	"</div>" +
	"</div>" +
	"<div class=\"col-sm-12\">" +
	"<form class=\"mg-b\" method=\"ge\" action=\"#\">" +
	"<div class=\"input-group\">" +
	"<input class=\"form-control\" type=\"text\" placeholder=\"Pesquisar...\">" +
	"<span class=\"input-group-btn\">" +
	"<button class=\"btn btn-contrast\" type=\"button\">" +
	"<i class=\"fa fa-search\"></i>" +
	"</button>" +
	"</span>" +
	"</div>" +
	"</form>" +
	"</div>" +
	"<div class=\"text-center\">" +
	"<ul class=\"pagination\">" +
	"<li>" +
	"<a href=\"#\">" +
	"<i class=\"fa fa-angle-left\"></i>" +
	"</a>" +
	"</li>" +
	"<li class=\"active\">" +
	"<a href=\"#\">1</a>" +
	"</li>" +
	"<li>" +
	"<a href=\"#\">2</a>" +
	"</li>" +
	"<li>" +
	"<a href=\"#\">3</a>" +
	"</li>" +
	"<li class=\"disabled\">" +
	"<a href=\"#\">" +
	"<i class=\fa fa-angle-right\"></i>" +
	"</a>" +
	"</li>" +
	"</ul>" +
	"</div>" +
	"<div class=\"container\">" +
	"<div class=\"row\">" +
	"<div class=\"panels-wrapper\">" +
	"<div class=\"row panels\">" +
	"<div class=\"col-sm-4 panel-item\">" +
	"<a class=\"panel panel-image\" href=\"#\" onclick=\"gotoTutorias();\">" +
	"<div class=\"panel-icon\">" +
	"<i class=\"fa fa-star icon\"></i>" +
	"</div>" +
	"<div class=\"panel-heading\">" +
	"<img class=\"img-responsive-sm\" width=\"768\" height=\"300\" src=\"assets/images/demo/panels/panel_bg_compass.jpg\" alt=\"Project planning\">" +
	"</div>" +
	"<div class=\"panel-body\">" +
	"<h3 class=\"panel-title\">Programando com NodeJS</h3>" +
	"<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu pharetra felis.est.</p>" +
	"</div>" +
	"</a>" +
	"</div>" +
	"<div class=\"col-sm-4 panel-item\">" +
	"<a class=\"panel panel-image\" href=\"#\" onclick=\"gotoTutorias();\">" +
	"<div class=\"panel-icon\">" +
	"<i class=\"fa fa-cog icon\"></i>" +
	"</div>" +
	"<div class=\"panel-heading\">" +
	"<img class=\"img-responsive-sm\" width=\"768\" height=\"300\" src=\"assets/images/demo/panels/panel_bg_hat.jpg\" alt=\"Easy customizable\">" +
	"</div>" +
	"<div class=\"panel-body\">" +
	"<h3 class=\"panel-title\">Aprenda HTML 5 e CSS 5</h3>" +
	"<p>Etiam init rutrum ligula semper neque relu dapibus, non tempus mauris sodales.est.</p>" +
	"</div>" +
	"</a>" +
	"</div>" +
	"<div class=\"col-sm-4 panel-item\">" +
	"<a class=\"panel panel-image\" href=\"#\" onclick=\"gotoTutorias();\">" +
	"<div class=\"panel-icon\">" +
	"<i class=\"fa fa-rocket icon\"></i>" +
	"</div>" +
	"<div class=\"panel-heading\">" +
	"<img class=\"img-responsive-sm\" width=\"768\" height=\"300\" src=\"assets/images/demo/panels/panel_bg_chess.jpg\" alt=\"Fastest workers\">" +
	"</div>" +
	"<div class=\"panel-body\">" +
	"<h3 class=\"panel-title\">Como burlar a internet da vivo no seu celular</h3>" +
	"<p>Pellentesque id neque sit amet nibh placerat suscipit et a purus, mauris id.</p>" +
	"</div>" +
	"</a>" +
	"</div>" +
	"</div>" +
	"</div>" +
	"</div>" +
	"<div class=\"row\">" +
	"<div class=\"panels-wrapper\">" +
	"<div class=\"row panels\">" +
	"<div class=\"col-sm-4 panel-item\">" +
	"<a class=\"panel panel-image\" href=\"#\" onclick=\"gotoTutorias();\">" +
	"<div class=\"panel-icon\">" +
	"<i class=\"fa fa-clock-o icon\"></i>" +
	"</div>" +
	"<div class=\"panel-heading\">" +
	"<img class=\"img-responsive-sm\" width=\"768\" height=\"300\" src=\"assets/images/demo/panels/panel_bg_compass.jpg\" alt=\"Project planning\">" +
	"</div>" +
	"<div class=\"panel-body\">" +
	"<h3 class=\"panel-title\">Os mais assistidos</h3>" +
	"<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu pharetra felis.est.</p>" +
	"</div>" +
	"</a>" +
	"</div>" +
	"<div class=\"col-sm-4 panel-item\">" +
	"<a class=\"panel panel-image\" href=\"#\" onclick=\"gotoTutorias();\">" +
	"<div class=\"panel-icon\">" +
	"<i class=\"fa fa-cog icon\"></i>" +
	"</div>" +
	"<div class=\"panel-heading\">" +
	"<img class=\"img-responsive-sm\" width=\"768\" height=\"300\" src=\"assets/images/demo/panels/panel_bg_hat.jpg\" alt=\"Easy customizable\">" +
	"</div>" +
	"<div class=\"panel-body\">" +
	"<h3 class=\"panel-title\">Easy customizable</h3>" +
	"<p>Etiam init rutrum ligula semper neque relu dapibus, non tempus mauris sodales.est.</p>" +
	"</div>" +
	"</a>" +
	"</div>" +
	"<div class=\"col-sm-4 panel-item\">" +
	"<a class=\"panel panel-image\" href=\"#\" onclick=\"gotoTutorias();\">" +
	"<div class=\"panel-icon\">" +
	"<i class=\"fa fa-rocket icon\"></i>" +
	"</div>" +
	"<div class=\"panel-heading\">" +
	"<img class=\"img-responsive-sm\" width=\"768\" height=\"300\" src=\"assets/images/demo/panels/panel_bg_chess.jpg\" alt=\"Fastest workers\">" +
	"</div>" +
	"<div class=\"panel-body\">" +
	"<h3 class=\"panel-title\">Fastest workers</h3>" +
	"<p>Pellentesque id neque sit amet nibh placerat suscipit et a purus, mauris id.</p>" +
	"</div>" +
	"</a>" +
	"</div>" +
	"</div>" +
	"</div>" +
	"</div>" +
	"<div class=\"row\">" +
	"<div class=\"panels-wrapper\">" +
	"<div class=\"row panels\">" +
	"<div class=\"col-sm-4 panel-item\">" +
	"<a class=\"panel panel-image\" href=\"#\" onclick=\"gotoTutorias();\">" +
	"<div class=\"panel-icon\">" +
	"<i class=\"fa fa-clock-o icon\"></i>" +
	"</div>" +
	"<div class=\"panel-heading\">" +
	"<img class=\"img-responsive-sm\" width=\"768\" height=\"300\" src=\"assets/images/demo/panels/panel_bg_compass.jpg\" alt=\"Project planning\">" +
	"</div>" +
	"<div class=\"panel-body\">" +
	"<h3 class=\"panel-title\">Os mais assistidos</h3>" +
	"<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu pharetra felis.est.</p>" +
	"</div>" +
	"</a>" +
	"</div>" +
	"<div class=\"col-sm-4 panel-item\">" +
	"<a class=\"panel panel-image\" href=\"#\" onclick=\"gotoTutorias();\">" +
	"<div class=\"panel-icon\">" +
	"<i class=\"fa fa-cog icon\"></i>" +
	"</div>" +
	"<div class=\"panel-heading\">" +
	"<img class=\"img-responsive-sm\" width=\"768\" height=\"300\" src=\"assets/images/demo/panels/panel_bg_hat.jpg\" alt=\"Easy customizable\">" +
	"</div>" +
	"<div class=\"panel-body\">" +
	"<h3 class=\"panel-title\">Easy customizable</h3>" +
	"<p>Etiam init rutrum ligula semper neque relu dapibus, non tempus mauris sodales.est.</p>" +
	"</div>" +
	"</a>" +
	"</div>" +
	"<div class=\"col-sm-4 panel-item\">" +
	"<a class=\"panel panel-image\" href=\"#\" onclick=\"gotoTutorias();\">" +
	"<div class=\"panel-icon\">" +
	"<i class=\"fa fa-rocket icon\"></i>" +
	"</div>" +
	"<div class=\"panel-heading\">" +
	"<img class=\"img-responsive-sm\" width=\"768\" height=\"300\" src=\"assets/images/demo/panels/panel_bg_chess.jpg\" alt=\"Fastest workers\">" +
	"</div>" +
	"<div class=\"panel-body\">" +
	"<h3 class=\"panel-title\">Fastest workers</h3>" +
	"<p>Pellentesque id neque sit amet nibh placerat suscipit et a purus, mauris id.</p>" +
	"</div>" +
	"</a>" +
	"</div>" +
	"</div>" +
	"</div>" +
	"</div>" +
	"</div>" +
	"<div class=\"text-center\">" +
	"<ul class=\"pagination\">" +
	"<li>" +
	"<a href=\"#\">" +
	"<i class=\"fa fa-angle-left\"></i>" +
	"</a>" +
	"</li>" +
	"<li class=\"active\">" +
	"<a href=\"#\">1</a>" +
	"</li>" +
	"<li>" +
	"<a href=\"#\">2</a>" +
	"</li>" +
	"<li>" +
	"<a href=\"#\">3</a>" +
	"</li>" +
	"<li class=\"disabled\">" +
	"<a href=\"#\">" +
	"<i class=\"fa fa-angle-right\"></i>" +
	"</a>" +
	"</li>" +
	"</ul>" +
	"</div>" +
	"</div>" +
	"</div>" +
	"</div>" +
	"</div>" +
	"</div>"
);


var gotoDoubts = function () {

	$("div.bindstep-content").html(
		"<div class=\"row\">" +
		"<div class=\"col-sm-12\">" +
		"<div class=\"page-header page-header-with-icon no-mg-t\">" +
		"<i class=\"fa fa-briefcase\"></i>" +
		"<h2>" +
		"Top services" +
		"<small>Mauris feugiat lacus quis aliquet dapibus. Sed venenatis turpis quis neque egestas porttitor.</small>" +
		"</h2>" +
		"</div>" +
		"<div class=\"row\">" +
		"<div class=\"col-sm-12\">" +
		"<form class=\"mg-b\" method=\"get\" action=\"#\">" +
		"<div class=\"input-group\">" +
		"<input class=\"form-control\" type=\"text\" placeholder=\"Search through FAQs...\">" +
		"<span class=\"input-group-btn\">" +
		"<button class=\"btn btn-contrast\" type=\"button\">" +
		"<i class=\"fa fa-search\"></i>" +
		"</button>" +
		"</span>" +
		"</div>" +
		"</form>" +
		"</div>" +
		"</div>" +
		"<div id=\"accordion\" class=\"panel-group accordion accordion-bordered\">" +
		"<div class=\"panel panel-default\">" +
		"<div class=\"panel-heading\">" +
		"<h4 class=\"panel-title\">" +
		"<a class=\"accordion-toggle collapsed\" href=\"#accordion-item-1\" data-toggle=\"collapse\"> Morbi et vehicula ipsum? </a>" +
		"</h4>" +
		"</div>" +
		"<div id=\"accordion-item-1\" class=\"panel-collapse collapse\">" +
		"<div class=\"panel-body\">" +
		"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla pretium gravida posuere. Nullam nibh purus, feugiat sit amet molestie at, dictum id nisi. Fusce sem purus, hendrerit eu euismod iaculis, consectetur et sapien. Pellentesque pharetra gravida leo sed auctor. Praesent eu eleifend odio, ac congue nisl. Sed sollicitudin pharetra justo, a euismod tortor fringilla et. Nam a imperdiet mi." +
		"<br>" +
		"<br>" +
		"Quisque ultricies tristique metus vitae sodales. Morbi et vehicula ipsum. Fusce at vulputate erat. Etiam ultrices ultricies tincidunt. Aliquam sit amet convallis erat. Nunc commodo facilisis felis, non ultrices justo pellentesque et. Ut at lorem non massa pellentesque malesuada. Ut sit amet est pulvinar, placerat magna et, congue tortor. Sed faucibus ante nec lectus dapibus, nec condimentum ligula elementum. Duis malesuada sapien nec hendrerit dapibus. Phasellus vitae risus sit amet risus dictum sagittis." +
		"</div>" +
		"</div>" +
		"</div>" +
		"<div class=\"panel panel-default\">" +
		"<div class=\"panel-heading\">" +
		"<h4 class=\"panel-title\">" +
		"<a class=\"accordion-toggle collapsed\" href=\"#accordion-item-2\" data-toggle=\"collapse\"> Nulla pretium gravida posuere? </a>" +
		"</h4>" +
		"</div>" +
		"<div id=\"accordion-item-2\" class=\"panel-collapse collapse\">" +
		"<div class=\"panel-body\">" +
		"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla pretium gravida posuere. Nullam nibh purus, feugiat sit amet molestie at, dictum id nisi. Fusce sem purus, hendrerit eu euismod iaculis, consectetur et sapien. Pellentesque pharetra gravida leo sed auctor. Praesent eu eleifend odio, ac congue nisl. Sed sollicitudin pharetra justo, a euismod tortor fringilla et. Nam a imperdiet mi." +
		"<br>" +
		"<br>" +
		"Quisque ultricies tristique metus vitae sodales. Morbi et vehicula ipsum. Fusce at vulputate erat. Etiam ultrices ultricies tincidunt. Aliquam sit amet convallis erat. Nunc commodo facilisis felis, non ultrices justo pellentesque et. Ut at lorem non massa pellentesque malesuada. Ut sit amet est pulvinar, placerat magna et, congue tortor. Sed faucibus ante nec lectus dapibus, nec condimentum ligula elementum. Duis malesuada sapien nec hendrerit dapibus. Phasellus vitae risus sit amet risus dictum sagittis." +
		"</div>" +
		"</div>" +
		"</div>" +
		"<div class=\"panel panel-default\">" +
		"<div class=\"panel-heading\">" +
		"<h4 class=\"panel-title\">" +
		"<a class=\"accordion-toggle collapsed\" href=\"#accordion-item-3\" data-toggle=\"collapse\"> Lorem ipsum dolor sit amet, consectetur adipiscing elit? </a>" +
		"</h4>" +
		"</div>" +
		"<div id=\"accordion-item-3\" class=\"panel-collapse collapse\">" +
		"<div class=\"panel-body\">" +
		"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla pretium gravida posuere. Nullam nibh purus, feugiat sit amet molestie at, dictum id nisi. Fusce sem purus, hendrerit eu euismod iaculis, consectetur et sapien. Pellentesque pharetra gravida leo sed auctor. Praesent eu eleifend odio, ac congue nisl. Sed sollicitudin pharetra justo, a euismod tortor fringilla et. Nam a imperdiet mi." +
		"<br>" +
		"<br>" +
		"Quisque ultricies tristique metus vitae sodales. Morbi et vehicula ipsum. Fusce at vulputate erat. Etiam ultrices ultricies tincidunt. Aliquam sit amet convallis erat. Nunc commodo facilisis felis, non ultrices justo pellentesque et. Ut at lorem non massa pellentesque malesuada. Ut sit amet est pulvinar, placerat magna et, congue tortor. Sed faucibus ante nec lectus dapibus, nec condimentum ligula elementum. Duis malesuada sapien nec hendrerit dapibus. Phasellus vitae risus sit amet risus dictum sagittis." +
		"</div>" +
		"</div>" +
		"</div>" +
		"<div class=\"panel panel-default\">" +
		"<div class=\"panel-heading\">" +
		"<h4 class=\"panel-title\">" +
		"<a class=\"accordion-toggle collapsed\" href=\"#accordion-item-4\" data-toggle=\"collapse\"> Morbi et vehicula ipsum? </a>" +
		"</h4>" +
		"</div>" +
		"<div id=\"accordion-item-4\" class=\"panel-collapse collapse\">" +
		"<div class=\"panel-body\">" +
		"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla pretium gravida posuere. Nullam nibh purus, feugiat sit amet molestie at, dictum id nisi. Fusce sem purus, hendrerit eu euismod iaculis, consectetur et sapien. Pellentesque pharetra gravida leo sed auctor. Praesent eu eleifend odio, ac congue nisl. Sed sollicitudin pharetra justo, a euismod tortor fringilla et. Nam a imperdiet mi." +
		"<br>" +
		"<br>" +
		"Quisque ultricies tristique metus vitae sodales. Morbi et vehicula ipsum. Fusce at vulputate erat. Etiam ultrices ultricies tincidunt. Aliquam sit amet convallis erat. Nunc commodo facilisis felis, non ultrices justo pellentesque et. Ut at lorem non massa pellentesque malesuada. Ut sit amet est pulvinar, placerat magna et, congue tortor. Sed faucibus ante nec lectus dapibus, nec condimentum ligula elementum. Duis malesuada sapien nec hendrerit dapibus. Phasellus vitae risus sit amet risus dictum sagittis." +
		"</div>" +
		"</div>" +
		"</div>" +
		"<div class=\"panel panel-default\">" +
		"<div class=\"panel-heading\">" +
		"<h4 class=\"panel-title\">" +
		"<a class=\"accordion-toggle collapsed\" href=\"#accordion-item-5\" data-toggle=\"collapse\"> Nulla pretium gravida posuere? </a>" +
		"</h4>" +
		"</div>" +
		"<div id=\"accordion-item-5\" class=\"panel-collapse collapse\">" +
		"<div class=\"panel-body\">" +
		"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla pretium gravida posuere. Nullam nibh purus, feugiat sit amet molestie at, dictum id nisi. Fusce sem purus, hendrerit eu euismod iaculis, consectetur et sapien. Pellentesque pharetra gravida leo sed auctor. Praesent eu eleifend odio, ac congue nisl. Sed sollicitudin pharetra justo, a euismod tortor fringilla et. Nam a imperdiet mi." +
		"<br>" +
		"<br>" +
		"Quisque ultricies tristique metus vitae sodales. Morbi et vehicula ipsum. Fusce at vulputate erat. Etiam ultrices ultricies tincidunt. Aliquam sit amet convallis erat. Nunc commodo facilisis felis, non ultrices justo pellentesque et. Ut at lorem non massa pellentesque malesuada. Ut sit amet est pulvinar, placerat magna et, congue tortor. Sed faucibus ante nec lectus dapibus, nec condimentum ligula elementum. Duis malesuada sapien nec hendrerit dapibus. Phasellus vitae risus sit amet risus dictum sagittis." +
		"</div>" +
		"</div>" +
		"</div>" +
		"<div class=\"panel panel-default\">" +
		"<div class=\"panel-heading\">" +
		"<h4 class=\"panel-title\">" +
		"<a class=\"accordion-toggle collapsed\" href=\"#accordion-item-6\" data-toggle=\"collapse\"> Lorem ipsum dolor sit amet, consectetur adipiscing elit? </a>" +
		"</h4>" +
		"</div>" +
		"<div id=\"accordion-item-6\" class=\"panel-collapse collapse\">" +
		"<div class=\"panel-body\">" +
		"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla pretium gravida posuere. Nullam nibh purus, feugiat sit amet molestie at, dictum id nisi. Fusce sem purus, hendrerit eu euismod iaculis, consectetur et sapien. Pellentesque pharetra gravida leo sed auctor. Praesent eu eleifend odio, ac congue nisl. Sed sollicitudin pharetra justo, a euismod tortor fringilla et. Nam a imperdiet mi." +
		"<br>" +
		"<br>" +
		"Quisque ultricies tristique metus vitae sodales. Morbi et vehicula ipsum. Fusce at vulputate erat. Etiam ultrices ultricies tincidunt. Aliquam sit amet convallis erat. Nunc commodo facilisis felis, non ultrices justo pellentesque et. Ut at lorem non massa pellentesque malesuada. Ut sit amet est pulvinar, placerat magna et, congue tortor. Sed faucibus ante nec lectus dapibus, nec condimentum ligula elementum. Duis malesuada sapien nec hendrerit dapibus. Phasellus vitae risus sit amet risus dictum sagittis." +
		"</div>" +
		"</div>" +
		"</div>" +
		"<div class=\"panel panel-default\">" +
		"<div class=\"panel-heading\">" +
		"<h4 class=\"panel-title\">" +
		"<a class=\"accordion-toggle collapsed\" href=\"#accordion-item-7\" data-toggle=\"collapse\"> Morbi et vehicula ipsum? </a>" +
		"</h4>" +
		"</div>" +
		"<div id=\"accordion-item-7\" class=\"panel-collapse collapse\">" +
		"<div class=\"panel-body\">" +
		"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla pretium gravida posuere. Nullam nibh purus, feugiat sit amet molestie at, dictum id nisi. Fusce sem purus, hendrerit eu euismod iaculis, consectetur et sapien. Pellentesque pharetra gravida leo sed auctor. Praesent eu eleifend odio, ac congue nisl. Sed sollicitudin pharetra justo, a euismod tortor fringilla et. Nam a imperdiet mi." +
		"<br>" +
		"<br>" +
		"Quisque ultricies tristique metus vitae sodales. Morbi et vehicula ipsum. Fusce at vulputate erat. Etiam ultrices ultricies tincidunt. Aliquam sit amet convallis erat. Nunc commodo facilisis felis, non ultrices justo pellentesque et. Ut at lorem non massa pellentesque malesuada. Ut sit amet est pulvinar, placerat magna et, congue tortor. Sed faucibus ante nec lectus dapibus, nec condimentum ligula elementum. Duis malesuada sapien nec hendrerit dapibus. Phasellus vitae risus sit amet risus dictum sagittis." +
		"</div>" +
		"</div>" +
		"</div>" +
		"<div class=\"panel panel-default\">" +
		"<div class=\"panel-heading\">" +
		"<h4 class=\"panel-title\">" +
		"<a class=\"accordion-toggle collapsed\" href=\"#accordion-item-8\" data-toggle=\"collapse\"> Nulla pretium gravida posuere? </a>" +
		"</h4>" +
		"</div>" +
		"<div id=\"accordion-item-8\" class=\"panel-collapse collapse\">" +
		"<div class=\"panel-body\">" +
		"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla pretium gravida posuere. Nullam nibh purus, feugiat sit amet molestie at, dictum id nisi. Fusce sem purus, hendrerit eu euismod iaculis, consectetur et sapien. Pellentesque pharetra gravida leo sed auctor. Praesent eu eleifend odio, ac congue nisl. Sed sollicitudin pharetra justo, a euismod tortor fringilla et. Nam a imperdiet mi." +
		"<br>" +
		"<br>" +
		"Quisque ultricies tristique metus vitae sodales. Morbi et vehicula ipsum. Fusce at vulputate erat. Etiam ultrices ultricies tincidunt. Aliquam sit amet convallis erat. Nunc commodo facilisis felis, non ultrices justo pellentesque et. Ut at lorem non massa pellentesque malesuada. Ut sit amet est pulvinar, placerat magna et, congue tortor. Sed faucibus ante nec lectus dapibus, nec condimentum ligula elementum. Duis malesuada sapien nec hendrerit dapibus. Phasellus vitae risus sit amet risus dictum sagittis." +
		"</div>" +
		"</div>" +
		"</div>" +
		"<div class=\"panel panel-default\">" +
		"<div class=\"panel-heading\">" +
		"<h4 class=\"panel-title\">" +
		"<a class=\"accordion-toggle collapsed\" href=\"#accordion-item-9\" data-toggle=\"collapse\"> Lorem ipsum dolor sit amet, consectetur adipiscing elit? </a>" +
		"</h4>" +
		"</div>" +
		"<div id=\"accordion-item-9\" class=\"panel-collapse collapse\">" +
		"<div class=\"panel-body\">" +
		"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla pretium gravida posuere. Nullam nibh purus, feugiat sit amet molestie at, dictum id nisi. Fusce sem purus, hendrerit eu euismod iaculis, consectetur et sapien. Pellentesque pharetra gravida leo sed auctor. Praesent eu eleifend odio, ac congue nisl. Sed sollicitudin pharetra justo, a euismod tortor fringilla et. Nam a imperdiet mi." +
		"<br>" +
		"<br>" +
		"Quisque ultricies tristique metus vitae sodales. Morbi et vehicula ipsum. Fusce at vulputate erat. Etiam ultrices ultricies tincidunt. Aliquam sit amet convallis erat. Nunc commodo facilisis felis, non ultrices justo pellentesque et. Ut at lorem non massa pellentesque malesuada. Ut sit amet est pulvinar, placerat magna et, congue tortor. Sed faucibus ante nec lectus dapibus, nec condimentum ligula elementum. Duis malesuada sapien nec hendrerit dapibus. Phasellus vitae risus sit amet risus dictum sagittis." +
		"</div>" +
		"</div>" +
		"</div>" +
		"<div class=\"panel panel-default\">" +
		"<div class=\"panel-heading\">" +
		"<h4 class=\"panel-title\">" +
		"<a class=\"accordion-toggle collapsed\" href=\"#accordion-item-10\" data-toggle=\"collapse\"> Morbi et vehicula ipsum? </a>" +
		"</h4>" +
		"</div>" +
		"<div id=\"accordion-item-10\" class=\"panel-collapse collapse\">" +
		"<div class=\"panel-body\">" +
		"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla pretium gravida posuere. Nullam nibh purus, feugiat sit amet molestie at, dictum id nisi. Fusce sem purus, hendrerit eu euismod iaculis, consectetur et sapien. Pellentesque pharetra gravida leo sed auctor. Praesent eu eleifend odio, ac congue nisl. Sed sollicitudin pharetra justo, a euismod tortor fringilla et. Nam a imperdiet mi." +
		"<br>" +
		"<br>" +
		"Quisque ultricies tristique metus vitae sodales. Morbi et vehicula ipsum. Fusce at vulputate erat. Etiam ultrices ultricies tincidunt. Aliquam sit amet convallis erat. Nunc commodo facilisis felis, non ultrices justo pellentesque et. Ut at lorem non massa pellentesque malesuada. Ut sit amet est pulvinar, placerat magna et, congue tortor. Sed faucibus ante nec lectus dapibus, nec condimentum ligula elementum. Duis malesuada sapien nec hendrerit dapibus. Phasellus vitae risus sit amet risus dictum sagittis." +
		"</div>" +
		"</div>" +
		"</div>" +
		"<div class=\"panel panel-default\">" +
		"<div class=\"panel-heading\">" +
		"<h4 class=\"panel-title\">" +
		"<a class=\"accordion-toggle collapsed\" href=\"#accordion-item-11\" data-toggle=\"collapse\"> Nulla pretium gravida posuere? </a>" +
		"</h4>" +
		"</div>" +
		"<div id=\"accordion-item-11\" class=\"panel-collapse collapse\">" +
		"<div class=\"panel-body\">" +
		"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla pretium gravida posuere. Nullam nibh purus, feugiat sit amet molestie at, dictum id nisi. Fusce sem purus, hendrerit eu euismod iaculis, consectetur et sapien. Pellentesque pharetra gravida leo sed auctor. Praesent eu eleifend odio, ac congue nisl. Sed sollicitudin pharetra justo, a euismod tortor fringilla et. Nam a imperdiet mi." +
		"<br>" +
		"<br>" +
		"Quisque ultricies tristique metus vitae sodales. Morbi et vehicula ipsum. Fusce at vulputate erat. Etiam ultrices ultricies tincidunt. Aliquam sit amet convallis erat. Nunc commodo facilisis felis, non ultrices justo pellentesque et. Ut at lorem non massa pellentesque malesuada. Ut sit amet est pulvinar, placerat magna et, congue tortor. Sed faucibus ante nec lectus dapibus, nec condimentum ligula elementum. Duis malesuada sapien nec hendrerit dapibus. Phasellus vitae risus sit amet risus dictum sagittis." +
		"</div>" +
		"</div>" +
		"</div>" +
		"<div class=\"panel panel-default\">" +
		"<div class=\"panel-heading\">" +
		"<h4 class=\"panel-title\">" +
		"<a class=\"accordion-toggle collapsed\" href=\"#accordion-item-12\" data-toggle=\"collapse\"> Lorem ipsum dolor sit amet, consectetur adipiscing elit? </a>" +
		"</h4>" +
		"</div>" +
		"<div id=\"accordion-item-12\" class=\"panel-collapse collapse\">" +
		"<div class=\"panel-body\">" +
		"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla pretium gravida posuere. Nullam nibh purus, feugiat sit amet molestie at, dictum id nisi. Fusce sem purus, hendrerit eu euismod iaculis, consectetur et sapien. Pellentesque pharetra gravida leo sed auctor. Praesent eu eleifend odio, ac congue nisl. Sed sollicitudin pharetra justo, a euismod tortor fringilla et. Nam a imperdiet mi." +
		"<br>" +
		"<br>" +
		"Quisque ultricies tristique metus vitae sodales. Morbi et vehicula ipsum. Fusce at vulputate erat. Etiam ultrices ultricies tincidunt. Aliquam sit amet convallis erat. Nunc commodo facilisis felis, non ultrices justo pellentesque et. Ut at lorem non massa pellentesque malesuada. Ut sit amet est pulvinar, placerat magna et, congue tortor. Sed faucibus ante nec lectus dapibus, nec condimentum ligula elementum. Duis malesuada sapien nec hendrerit dapibus. Phasellus vitae risus sit amet risus dictum sagittis." +
		"</div>" +
		"</div>" +
		"</div>" +
		"</div>" +
		"</div>" +
		"</div>" +
		"<div class=\"row\">" +
		"<div class=\"col-md-6 col-md-offset-3 col-sm-8 col-sm-offset-2\">" +
		"<div class=\"page-header page-header-with-icon\">" +
		"<i class=\"fa fa-question-circle\"></i>" +
		"<h2>Cant find the answer?</h2>" +
		"</div>" +
		"<form class=\"form form-validation form-contact\" method=\"post\" novalidate=\"novalidate\">" +
		"<div class=\"row\">" +
		"<div class=\"col-sm-12\">" +
		"<div class=\"alert alert-success form-contact-success hidden\">Thanks! Your message has been successfully sent!</div>" +
		"<div class=\"alert alert-danger form-contact-error hidden\">Ooops! There was an error sending your message.</div>" +
		"</div>" +
		"</div>" +
		"<div class=\"row\">" +
		"<div class=\"col-sm-6\">" +
		"<div class=\"form-group control-group\">" +
		"<input class=\"form-control\" type=\"text\" placeholder=\"Name\" name=\"name\" data-rule-required=\"true\">" +
		"<input class=\"form-control\" type=\"text\" style=\"display: none;\" placeholder=\"Are you human?\" name=\"human\">" +
		"</div>" +
		"</div>" +
		"<div class=\"col-sm-6\">" +
		"<div class=\"form-group control-group\">" +
		"<input class=\"form-control\" type=\"email\" placeholder=\"E-Mail\" name=\"email\" data-rule-required=\"true\" data-rule-email=\"true\">" +
		"</div>" +
		"</div>" +
		"</div>" +
		"<div class=\"row\">" +
		"<div class=\"col-sm-12\">" +
		"<div class=\"form-group control-group\">" +
		"<textarea class=\"form-control\" rows=\"10\" placeholder=\"Your message..\" name=\"message\" data-rule-required=\"true\"></textarea>" +
		"</div>" +
		"</div>" +
		"</div>" +
		"<div class=\"row\">" +
		"<div class=\"col-sm-12\">" +
		"<button class=\"btn btn-contrast btn-block form-contact-submit\" type=\"submit\" data-loading-text=\"<i class='fa-icon-refresh fa-icon-spin'></i> sending...\"> send message </button>" +
		"</div>" +
		"</div>" +
		"</form>" +
		"</div>" +
		"</div>" +
		"</div>" +
		"</div>" +
		"<div id=\"scroll-to-top\" class=\"fade\">" +
		"<i class=\"fa fa-chevron-up\"></i>" +
		"</div>" +
		"</div>"
	);

}


var gotoTutorias = function () {

	$("div.bindstep-content").html(
		"<div class=\"row\">" +
		"<div class=\"col-md-push-9 col-sm-push-8 col-sm-4 col-md-3\">" +
		"<nav class=\"sidebar\">" +
		"<button class=\"btn btn-block btn-contrast sidebar-toggle\" type=\"button\" data-toggle=\"collapse\" data-target=\".sidebar-collapse\">" +
		"<span class=\"sr-only\">Toggle navigation</span>" +
		"<span class=\"icon-bar\"></span>" +
		"<span class=\"icon-bar\"></span>" +
		"<span class=\"icon-bar\"></span>" +
		"</button>" +
		"<br>" +
		"<br>" +
		"<br>" +
		"<br>" +
		"<div class=\"sidebar-collapse collapse\">" +
		"<div class=\"box\">" +
		"<h3 class=\"title\">Search in blog</h3>" +
		"<form method=\"get\" action=\"blog_large.html\">" +
		"<div class=\"input-group\">" +
		"<input class=\"form-control\" type=\"text\" placeholder=\"Search...\">" +
		"<span class=\"input-group-btn\">" +
		"<button class=\"btn btn-contrast\" type=\"button\">" +
		"<i class=\"fa fa-search\"></i>" +
		"</button>" +
		"</span>" +
		"</div>" +
		"</form>" +
		"</div>" +
		"<div class=\"box\">" +
		"<h3 class=\"title\">Categories</h3>" +
		"<div class=\"list-group\">" +
		"<a class=\"list-group-item\" href=\"#\">" +
		"<i class=\"fa fa-angle-right fa fa-fixed-width\"></i>" +
		"Quisque et fringilla" +
		"</a>" +
		"<a class=\"list-group-item active\" href=\"#\">" +
		"<i class=\"fa fa-angle-right fa fa-fixed-width\"></i>" +
		"Etiam bibendum" +
		"</a>" +
		"<a class=\"list-group-item\" href=\"#\">" +
		"<i class=\"fa fa-angle-right fa fa-fixed-width\"></i>" +
		"Vestibulum" +
		"</a>" +
		"<a class=\"list-group-item\" href=\"#\">" +
		"<i class=\"fa fa-angle-right fa fa-fixed-width\"></i>" +
		"Mauris gravida" +
		"</a>" +
		"<a class=\"list-group-item\" href=\"#\">" +
		"<i class=\"fa fa-angle-right fa fa-fixed-width\"></i>" +
		"Magna dui" +
		"</a>" +
		"<a class=\"list-group-item\" href=\"#\">" +
		"<i class=\"fa fa-angle-right fa fa-fixed-width\"></i>" +
		"Adipiscing elementum" +
		"</a>" +
		"</div>" +
		"</div>" +
		"<div class=\"box\">" +
		"<h3 class=\"title\">Photostream</h3>" +
		"<ul class=\"list-unstyled list-inline image-list-box\">" +
		"<li>" +
		"<a href=\"#\">" +
		"<img width=\"50\" height=\"50\" src=\"assets/images/demo/stream/1.jpg\" alt=\"Jednotka\">" +
		"</a>" +
		"</li>" +
		"<li>" +
		"<a href=\"#\">" +
		"<img width=\"50\" height=\"50\" src=\"assets/images/demo/stream/2.jpg\" alt=\"Jednotka\">" +
		"</a>" +
		"</li>" +
		"<li>" +
		"<a href=\"#\">" +
		"<img width=\"50\" height=\"50\" src=\"assets/images/demo/stream/3.jpg\" alt=\"Jednotka\">" +
		"</a>" +
		"</li>" +
		"<li>" +
		"<a href=\"#\">" +
		"<img width=\"50\" height=\"50\" src=\"assets/images/demo/stream/4.jpg\" alt=\"Jednotka\">" +
		"</a>" +
		"</li>" +
		"<li>" +
		"<a href=\"#\">" +
		"<img width=\"50\" height=\"50\" src=\"assets/images/demo/stream/5.jpg\" alt=\"Jednotka\">" +
		"</a>" +
		"</li>" +
		"<li>" +
		"<a href=\"#\">" +
		"<img width=\"50\" height=\"50\" src=\"assets/images/demo/stream/6.jpg\" alt=\"Jednotka\">" +
		"</a>" +
		"</li>" +
		"</ul>" +
		"</div>" +
		"<div class=\"box social-box\">" +
		"<h3 class=\"title\">Latest tweets</h3>" +
		"<div class=\"icon-boxes icon-boxes-nowrap\">" +
		"<div class=\"icon-box\">" +
		"<div class=\"icon icon-wrap\">" +
		"<i class=\"fa fa-twitter text-contrast\"></i>" +
		"</div>" +
		"<div class=\"content\">" +
		"<p>" +
		"Phasellus vulputate lobortis sem. Mauris id velit in urna." +
		"<br>" +
		"<a class=\"time\" href=\"#\">" +
		"<i>1 hour ago</i>" +
		"</a>" +
		"</p>" +
		"</div>" +
		"</div>" +
		"<div class=\"icon-box\">" +
		"<div class=\"icon icon-wrap\">" +
		"<i class=\"fa fa-twitter text-contrast\"></i>" +
		"</div>" +
		"<div class=\"content\">" +
		"<p>" +
		"Etiam luctus, dui congue tempus blandit, dui." +
		"<br>" +
		"<a class=\"time\" href=\"#\">" +
		"<i>3 hours ago</i>" +
		"</a>" +
		"</p>" +
		"</div>" +
		"</div>" +
		"</div>" +
		"</div>" +
		"</div>" +
		"</nav>" +
		"</div>" +
		"<div class=\"col-md-pull-3 col-sm-pull-4 col-sm-8 col-md-9\">" +
		"<div class=\"text-boxes\">" +
		"<div class=\"row text-box text-box-title-above text-box-big-image\">" +
		"<div class=\"col-sm-12\">" +
		"<h2 class=\"title\">" +
		"<a href=\"blog_single_post.html\">Cras tempus ligula a tempor adipiscing</a>" +
		"</h2>" +
		"<div class=\"toolbar\">" +
		"<a class=\"btn btn-link\" href=\"#\">" +
		"<i class=\"fa fa-calendar\"></i>" +
		"<span>April 14, 2013</span>" +
		"</a>" +
		"<a class=\"btn btn-link\" href=\"#\">" +
		"<i class=\"fa fa-user\"></i>" +
		"<span>John Doe</span>" +
		"</a>" +
		"<a class=\"btn btn-link\" href=\"#\">" +
		"<i class=\"fa fa-comments\"></i>" +
		"<span>13 comments</span>" +
		"</a>" +
		"</div>" +
		"<div class=\"row\">" +
		"<div class=\"col-sm-12\">" +
		"<a href=\"blog_single_post.html\">" +
		"<img class=\"img-responsive center-block img-rounded-half\" width=\"848\" height=\"364\" src=\"assets/images/demo/blog/1_lg.jpg\" alt=\"Cras tempus ligula a tempor adipiscing\">" +
		"</a>" +
		"</div>" +
		"<div class=\"col-sm-12\">" +
		"<p>Aliquam erat volutpat. Duis viverra at erat ut semper. In purus nisl, luctus sed eleifend at, pellentesque ut dolor. Nunc sodales nisi sed ullamcorper pellentesque. Etiam posuere nulla eu lectus porta ullamcorper. Aenean sit amet lectus eget augue euismod ultricies eu nec risus. Vivamus hendrerit nisi commodo.</p>" +
		"</div>" +
		"</div>" +
		"<hr class=\"hr-half\">" +
		"</div>" +
		"</div>" +
		"<div class=\"row text-box\">" +
		"<div class=\"col-sm-12\">" +
		"<h2>Lorem ipsum dolor sit amet</h2>" +
		"<p>Praesent sed viverra lacus. Aliquam congue porttitor ipsum sed vulputate. Nam lacus nunc, malesuada a massa sed, commodo placerat sem. Fusce rutrum bibendum adipiscing. Donec ac justo et metus vulputate faucibus. Mauris quis massa vel urna gravida vulputate vitae eu metus. Sed in leo sed metus tempus egestas a ac massa. Nunc cursus urna ac molestie cursus. Donec non sapien neque.</p>" +
		"<p>Ut ipsum nisi, tempus ac iaculis ac, ultricies quis arcu. Integer tempor vitae lectus quis gravida. Mauris eget neque in lorem eleifend hendrerit vel et ligula. Ut ac viverra neque. In ullamcorper odio nec odio laoreet tempus. Cras eu sem eu purus posuere sagittis. In at dignissim quam. Pellentesque mollis, mi et condimentum hendrerit, felis justo interdum nulla, sed placerat nulla nibh et metus.</p>" +
		"<p>Etiam ac consectetur dui, id mollis neque. Phasellus rutrum augue nec convallis bibendum. Etiam vitae aliquam leo, laoreet venenatis massa. Aliquam erat volutpat. Fusce rutrum augue sit amet lobortis tempor. Duis ut malesuada augue, vel fringilla ante. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum a justo sed tortor vehicula fringilla eget ut diam. Praesent posuere aliquam vulputate. Donec porta mi vitae felis interdum congue. Sed vitae rhoncus massa, volutpat ultrices felis. Proin eu ullamcorper urna. Nullam eu mi vel metus faucibus mollis. Nulla rutrum fermentum dui quis ullamcorper. Integer metus nunc, interdum non libero a, semper fringilla ligula.</p>" +
		"</div>" +
		"</div>" +
		"<div class=\"row\">" +
		"<div class=\"col-sm-12\">" +
		"<div class=\"author-box\">" +
		"<div class=\"row\">" +
		"<div class=\"col-sm-3 col-lg-2\">" +
		"<img class=\"img-circle img-responsive center-block\" width=\"165\" height=\"165\" src=\"assets/images/demo/profiles/1.jpg\" alt=\"Author\">" +
		"</div>" +
		"<div class=\"col-sm-9 col-lg-10\">" +
		"<h3 class=\"title\">About author</h3>" +
		"<p>Etiam ac consectetur dui, id mollis neque. Phasellus rutrum augue nec convallis bibendum. Etiam vitae aliquam leo, laoreet venenatis massa. Aliquam erat volutpat. Fusce rutrum augue sit amet lobortis tempor.</p>" +
		"</div>" +
		"</div>" +
		"</div>" +
		"</div>" +
		"</div>" +
		"<div class=\"row\">" +
		"<div id=\"comments\" class=\"col-sm-12\">" +
		"<h3> Comments (4) </h3>" +
		"<div class=\"media\">" +
		"<div class=\"pull-left\">" +
		"<div class=\"media-object without-image\"></div>" +
		"</div>" +
		"<div class=\"media-body\">" +
		"<div class=\"content\">" +
		"<div class=\"toolbar\">" +
		"<h4 class=\"title\">John Doe</h4>" +
		"<a class=\"btn btn-link link-contrast btn-sm\" href=\"#\">" +
		"<i class=\"fa fa-reply\"></i>" +
		"<span>Reply</span>" +
		"</a>" +
		"</div>" +
		"<p>Praesent sed viverra lacus. Aliquam congue porttitor ipsum sed vulputate. Nam lacus nunc, malesuada a massa sed, commodo placerat sem. Fusce rutrum bibendum adipiscing. Donec ac justo et metus vulputate faucibus. Mauris quis massa.</p>" +
		"<p class=\"time\">" +
		"<a href=\"#\">16 April, 2013</a>" +
		"</p>" +
		"</div>" +
		"</div>" +
		"</div>" +
		"<div class=\"media\">" +
		"<div class=\"pull-left\">" +
		"<div class=\"media-object without-image\"></div>" +
		"</div>" +
		"<div class=\"media-body\">" +
		"<div class=\"content\">" +
		"<div class=\"toolbar\">" +
		"<h4 class=\"title\">David Doe</h4>" +
		"<a class=\"btn btn-link link-contrast btn-sm\" href=\"#\">" +
		"<i class=\"fa fa-reply\"></i>" +
		"<span>Reply</span>" +
		"</a>" +
		"</div>" +
		"<p>Etiam ac consectetur dui, id mollis neque. Phasellus rutrum augue nec convallis bibendum. Etiam vitae aliquam leo, laoreet venenatis massa. Aliquam erat volutpat.</p>" +
		"<p class=\"time\">" +
		"<a href=\"#\">14 April, 2013</a>" +
		"</p>" +
		"</div>" +
		"<div class=\"media\">" +
		"<div class=\"pull-left\">" +
		"<img class=\"media-object\" width=\"60\" height=\"60\" src=\"assets/images/demo/profiles/4.jpg\" alt=\"Jessica Doe\">" +
		"</div>" +
		"<div class=\"media-body\">" +
		"<div class=\"content staff\">" +
		"<div class=\"toolbar\">" +
		"<h4 class=\"title\">" +
		"Jessica Doe" +
		"<span class=\"label label-contrast\">Staff</span>" +
		"</h4>" +
		"<a class=\"btn btn-link link-contrast btn-sm\" href=\"#\">" +
		"<i class=\"fa fa-reply\"></i>" +
		"<span>Reply</span>" +
		"</a>" +
		"</div>" +
		"<p>Proin eu ullamcorper urna. Nullam eu mi vel metus faucibus mollis. Nulla rutrum fermentum dui quis ullamcorper. Integer metus nunc, interdum non libero a, semper fringilla ligula.</p>" +
		"<p class=\"time\">" +
		"<a href=\"#\">14 April, 2013</a>" +
		"</p>" +
		"</div>" +
		"</div>" +
		"</div>" +
		"</div>" +
		"</div>" +
		"<div class=\"media\">" +
		"<div class=\"pull-left\">" +
		"<div class=\"media-object without-image\">" +
		"</div>" +
		"</div>" +
		"<div class=\"media-body\">" +
		"<div class=\"content\">" +
		"<div class=\"toolbar\">" +
		"<h4 class=\"title\">Mike Doe</h4>" +
		"<a class=\"btn btn-link link-contrast btn-sm\" href=\"#\">" +
		"<i class=\"fa fa-reply\"></i>" +
		"<span>Reply</span>" +
		"</a>" +
		"</div>" +
		"<p>Praesent sed viverra lacus. Aliquam congue porttitor ipsum sed vulputate. Nam lacus nunc, malesuada a massa sed, commodo placerat sem.</p>" +
		"<p class=\"time\">" +
		"<a href=\"#\">11 April, 2013</a>" +
		"</p>" +
		"</div>" +
		"</div>" +
		"</div>" +
		"</div>" +
		"</div>" +
		"<div class=\"row\">" +
		"<hr class=\"hr-invisible hr-half\">" +
		"<div id=\"add-new-comment\" class=\"col-sm-12\">" +
		"<h3>Add comment</h3>" +
		"<form class=\"form form-validation\" method=\"get\" action=\"blog_single_post.html\" novalidate=\"novalidate\">" +
		"<div class=\"row\">" +
		"<div class=\"col-sm-4\">" +
		"<div class=\"form-group control-group\">" +
		"<input id=\"comment_name\" class=\"form-control\" type=\"text\" placeholder=\"Name\" name=\"comment[name]\" data-rule-required=\"true\">" +
		"</div>" +
		"</div>" +
		"<div class=\"col-sm-4\">" +
		"<div class=\"form-group control-group\">" +
		"<input id=\"comment_email\" class=\"form-control\" type=\"text\" placeholder=\"E-Mail\" name=\"comment[email]\" data-rule-required=\"true\" data-rule-email=\"true\">" +
		"</div>" +
		"</div>" +
		"<div class=\"col-sm-4\">" +
		"<div class=\"form-group control-group\">" +
		"<input id=\"comment_website\" class=\"form-control\" type=\"text\" placeholder=\"Website\" name=\"comment[website\">" +
		"</div>" +
		"</div>" +
		"</div>" +
		"<div class=\"row\">" +
		"<div class=\"col-sm-12\">" +
		"<div class=\"form-group control-group\">" +
		"<textarea id=\"comment_message\" class=\"form-control\" rows=\"5\" placeholder=\"Comment...\" name=\"comment[message]\" data-rule-required=\"true\"></textarea>" +
		"</div>" +
		"</div>" +
		"</div>" +
		"<div class=\"row\">" +
		"<div class=\"col-sm-12\">" +
		"<button class=\"btn btn-contrast\" type=\"submit\"> Add comment </button>" +
		"</div>" +
		"</div>" +
		"</form>" +
		"</div>" +
		"</div>" +
		"</div>" +
		"</div>" +
		"</div>" +
		"</div>" +
		"</div>");


}


var gotoLogin = function () {

	$("div.bindstep-content").html("<div class=\"row\">" +
		"<div class=\"col-sm-12\">" +
		"<div class=\"page-header page-header-with-icon no-mg-t\">" +
		"<i class=\"fa fa-key\"></i>" +
		"<h2>" +
		"Please, sign in to your account" +
		"<small>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.</small>" +
		"</h2>" +
		"</div>" +
		"</div>" +
		"</div>" +"<section class=\"slice bg-3\">" +
	"<div class=\"w-section inverse\">" +
	"<div class=\"container\">" +
	"<div class=\"row\">" +
	"<div class=\"col-md-6 col-md-offset-3 col-sm-6 col-sm-offset-3\">" +
	"<div class=\"w-section inverse\">" +
	"<div class=\"w-box sign-in-wr bg-5\">" +
	"<div class=\"form-header\">" +

	"</div>" +
	"<div class=\"form-body\">" +
		"<form class=\"form-light padding-15\" role=\"form\">" +
	"<div class=\"form-group\">" +
	"<label>Email</label>" +
	"<input id=\"txtEmail\" class=\"form-control\" type\"email\" placeholder=\"\">" +
	"</div>" +
	"<div class=\"form-group\">" +
	"<label>Password</label>" +
	"<input id=\"txtPassword\" class=\"form-control\" type=\"password\" placeholder=\"\">" +
	"</div>" +
	"<div class=\"row\">" +
	"<div class=\"col-md-6\">" +
	"<label class=\"checkbox\">" +
	"<input type=\"checkbox\">" +
	"Remember me" +
	"</label>" +
	"</div>" +
	"<div class=\"col-md-6\">" +
	"<button class=\"btn btn-two pull-right\" type=\"submit\">Sign In</button>" +
	"</div>" +
	"</div>" +
	"</form>" +
	"</div>" +
	"<div class=\"form-footer\">" +
	"<p>" +
	"Lost your password?" +
	"<a href=\"#\">Click here to recover.</a>" +
	"</p>" +
	"<center>" +
		"<hr>" +
		"Please, sign in to your account" +
			"<p>" +
		"<br>" +
		"<button class=\"btn btn-two pull\" href=\"#\" onclick=\"gotoSignUp();\">Criar Cadastro</button>" +
		"</center>" +

	"</div>" +
	"</div>" +
	"</div>" +
	"</div>" +
	"</div>" +
	"</div>" +
	"</div>" +
	"</section>"
	)
	;
}

var gotoSignUp = function (){
		$("div.bindstep-content").html("<div class=\"row\">" +
			"<div class=\"col-sm-12\">" +
			"<div class=\"page-header page-header-with-icon no-mg-t\">" +
			"<i class=\"fa fa-thumbs-up\"></i>" +
			"<h2>" +
			"Please, sign in to your account" +
			"<small>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.</small>" +
			"</h2>" +
			"</div>" +
			"</div>" +"<div class=\"row\">" +
		"<div class=\"col-md-8 col-md-offset-2 col-sm-6 col-sm-offset-3\">" +
			"<div class=\"w-section inverse\">" +
				"<div class=\"w-box sign-in-wr bg-5\">" +
					"<div class=\"form-header\">" +
						"<h2>Create your own account</h2>" +
					"</div>" +
							"<div class=\"form-body\">" +
								"<p> Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. </p>" +
									"<form class=\"form-light padding-15\">" +
										"<div class=\"row\">" +
											"<div class=\"col-md-6\">" +
												"<div class=\"form-group\">" +
		"<label for=\"firstName\">First name</label>" +
		"<input id=\"firstName\" class=\"form-control\" type=\"text\" placeholder=\"\">" +
		"</div>" +
		"</div>" +
	"<div class=\"col-md-6\">" +
	"<div class=\"form-group\">" +
	"<label for=\"lastName\">Last name</label>" +
	"<input id=\"lastName\" class=\"form-control\" type=\"text\" placeholder=\"\">" +
	"</div>" +
	"</div>" +
	"</div>" +
	"<div class=\"form-group\">" +
	"<label for=\"email\">Email</label>" +
	"<input id=\"txtEmail\" class=\"form-control\" type=\"email\" placeholder=\"\">" +
	"</div>" +
	"<div class=\"row\">" +
	"<div class=\"col-md-6\">" +
	"<div class=\"form-group\">" +
	"<label for=\"pass\">Password</label>" +
	"<input id=\"pass\" class=\"form-control\" type=\"password\" placeholder=\"\">" +
	"</div>" +
	"</div>" +
	"<div class=\"col-md-6\">" +
	"<div class=\"form-group\">" +
	"<label for=\"pass2\">Confirm password</label>" +
	"<input id=\"pass2\" class=\"form-control\" type=\"password\" placeholder=\"\">" +
	"</div>" +
	"</div>" +
	"</div>" +
	"<div class=\"row\">" +
	"<div class=\"col-md-6\">" +
	"<div class=\"form-group\">" +
	"<label for=\"country\">Country</label>" +
	"<input id=\"country\" class=\"form-control\" type=\"text\" placeholder=\"\">" +
	"</div>" +
	"</div>" +
	"<div class=\"col-md-6\">" +
	"<div class=\"form-group\">" +
	"<label for=\"city\">City</label>" +
	"<input id=\"city\" class=\"form-control\" type=\"text\" placeholder=\"\">" +
	"</div>" +
	"</div>" +
	"</div>" +
	"<div class=\"row\">" +
	"<div class=\"col-md-6\">" +
	"<label class=\"checkbox persistent\">" +
	"<input type=\"checkbox\">" +
	"I accept the" +
	"<a href=\"terms.html\">terms and conditions of this website.</a>" +
	"</label>" +
	"</div>" +
	"<div class=\"col-md-6\">" +
	"<button class=\"btn btn-two pull-right\" type=\"submit\">Sign Up</button>" +
	"</div>" +
	"</div>" +
	"</form>" +
	"</div>" +
	"<div class=\"form-footer\">" +
	"<p>" +
	"Already have an account?" +
	"<a href=\"sign-in.html\">Click here to sign in.</a>" +
	"</p>" +
	"</div>" +
	"</div>" +
	"</div>" +
	"</div>" +
	"</div>" +
	"</div>" +
	"</div>" +
	"</section>"
	);
	}
