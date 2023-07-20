describe('Тестирование формы логина',function(){
	it('Ввод валидного логина и пароля',function(){
		cy.log('Переход на страницу авторизации');
		cy.visit('https://login.qa.studio/');
		cy.get('#mail').type('german@dolnikov.ru');
		cy.get('#pass').type('iLoveqastudio1');
		cy.get('#loginButton').click();
		cy.contains('Авторизация прошла успешно').should('be.visible');
		cy.get('#exitMessageButton > .exitIcon').should('be.visible');
		
	})
	it('Проверяю форму восстановления пароля',function(){
		cy.log('Переход на страницу авторизации');
		cy.visit('https://login.qa.studio/');
		cy.get('#forgotEmailButton').click();
		cy.get('#mailForgot').type('ggg@mail.ru');
		cy.get('#restoreEmailButton').click()
		cy.contains('Успешно отправили пароль на e-mail').should('be.visible')
	})	
	
	it('Ввод валидного логина и не кореектного пароля',function(){
		cy.log('Переход на страницу авторизации');
		cy.visit('https://login.qa.studio/');
		cy.get('#mail').type('german@dolnikov.ru');
		cy.get('#pass').type('непрвильныйпароль');
		cy.get('#loginButton').click();
		cy.contains('Такого логина или пароля нет').should('be.visible');
		cy.get('#exitMessageButton > .exitIcon').should('be.visible');
		
	})
	it('Ввод не валидного логина и валидного пароля',function(){
		cy.log('Переход на страницу авторизации');
		cy.visit('https://login.qa.studio/');
		cy.get('#mail').type('sdsds@dolnikov.ru');
		cy.get('#pass').type('iLoveqastudio1');
		cy.get('#loginButton').click();
		cy.contains('Такого логина или пароля нет').should('be.visible');
		cy.get('#exitMessageButton > .exitIcon').should('be.visible');
		
	})
	it('Ввод не валидного логина и валидного пароля',function(){
		cy.log('Переход на страницу авторизации');
		cy.visit('https://login.qa.studio/');
		cy.get('#mail').type('sdsdsdolnikov.ru');
		cy.get('#pass').type('iLoveqastudio1');
		cy.get('#loginButton').click();
		cy.contains('Нужно исправить проблему валидации').should('be.visible');
		cy.get('#exitMessageButton > .exitIcon').should('be.visible');
		
	})
	it('Ввод приведенного к строчным буквам в  логине и корректного пароля',function(){
		cy.log('Переход на страницу авторизации');
		cy.visit('https://login.qa.studio/');
		cy.get('#mail').type('GerMan@Dolnikov.ru');
		cy.get('#pass').type('iLoveqastudio1');
		cy.wait(3000)
		cy.get('#loginButton').click();
		cy.contains('Авторизация прошла успешно').should('be.visible');
		cy.get('#exitMessageButton > .exitIcon').should('be.visible');
		
	})
})
