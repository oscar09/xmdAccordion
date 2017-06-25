describe('xmdAccordion', function()
{
	var $rootScope;
	var $scope;
	var $compile;
	var el;
	var $el;
	var $body = $('body');
	var simpleHtml = '<xmd-accordion label="test title"><p>Content goes here</p></xmd-accordion>';
	var simpleHtmlExpanded = '<xmd-accordion is-open="true"><p>Content goes here</p></xmd-accordion>';

	beforeEach(function()
	{
		module('templates', 'xmd.directives.xmdAccordion');
		inject(function($injector)
		{
			$rootScope = $injector.get('$rootScope');
			$scope = $rootScope.$new();
			$scope.card = '';
			$compile = $injector.get('$compile');
			el = $compile(angular.element(simpleHtml))($scope);
		});

		$body.append(el);
		$rootScope.$digest();
		$el = $(el);
	});

	afterEach(function()
	{
		$body.empty();
	});

	it('should be with content collapsed', function()
	{
		var _element = el.find('p').parent().parent();
		expect(_element.hasClass('x-collapsed')).toEqual(true);
	});

	it('should have a title', function()
	{
		var _element = el.find('h2');
		expect(_element.text()).toEqual('test title');
	});

	it('should have a content', function()
	{
		var _element = el.find('p').parent();
		expect(_element.hasClass('x-content')).toEqual(true);
	});
});

describe('xmdAccordion - EXPANDED', function()
{
	var $rootScope;
	var $scope;
	var $compile;
	var el;
	var $el;
	var $body = $('body');
	var simpleHtmlExpanded = '<xmd-accordion is-open="true"><p>Content goes here</p></xmd-accordion>';

	beforeEach(function()
	{
		module('templates', 'xmd.directives.xmdAccordion');
		inject(function($injector)
		{
			$rootScope = $injector.get('$rootScope');
			$scope = $rootScope.$new();
			$scope.card = '';
			$compile = $injector.get('$compile');
			el = $compile(angular.element(simpleHtmlExpanded))($scope);
		});

		$body.append(el);
		$rootScope.$digest();
		$el = $(el);
	});

	afterEach(function()
	{
		$body.empty();
	});

	it('should be with content expanded', function()
	{
		var _element = el.find('p').parent().parent();
		expect(_element.hasClass('x-expanded')).toEqual(true);
	});
});