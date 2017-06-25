'use strict';
/**
 * @ngdoc directive
 * @name xmdAccordion
 * @id xmd.directives.xmdAccordion
 * @description Creates an angular material accordion.
 *
 * ###Additional information
 * - Date: 06/24/2017.
 *
 */
angular.module('xmd.directives.xmdAccordion', [])
	.run(['$templateCache', function($templateCache) {
	$templateCache.put('xmdAccordion.html', '<div layout=column class=x-accordion><div class=x-header layout=row><h2></h2></div><div class=x-content layout=column ng-transclude="" flex=""></div></div>');
}])

	.directive('xmdAccordion', [
		function() {
			return {
				restrict: 'AE',
				templateUrl: 'xmdAccordion.html',
				transclude: true,
				scope: {
				},
				link: function postLink(scope, element, attr)
				{
					var _header_title_element = element.find('h2');
					var _header_element = _header_title_element.parent();
					var _main_element = element[0].getElementsByClassName('x-accordion');
					_main_element = angular.element(_main_element);

					/* Sets the accordion header. */
					if(attr.label)
					{
						_header_title_element.text(attr.label);
					}

					/* Checks if the accordion must start open */
					if(attr.isOpen && attr.isOpen === 'true')
					{
						_header_title_element.addClass('expanded');
						_main_element.removeClass('x-collapsed');
						_main_element.addClass('x-expanded');
					}else
					{
						_main_element.addClass('x-collapsed');
					}

					/* Slide up/down content when header is clicked. */
					_header_element.on('click', function()
					{
						/* Content is expanded, so collapse it. */
						if(_header_title_element.hasClass('expanded'))
						{
							_header_title_element.removeClass('expanded');
							_main_element.removeClass('x-expanded');
							_main_element.addClass('x-collapsed');
						}else /* Content is collapsed, so expand it. */
						{
							_header_title_element.addClass('expanded');
							_main_element.removeClass('x-collapsed');
							_main_element.addClass('x-expanded');
						}
					});
				}
			};
		}
	])
;
