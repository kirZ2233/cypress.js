
describe('template spec', function()  {

  it('passes', function()  {

    cy.visit('https://huntingpony.com/')
    cy.get('[data-index="1"] > .header__collections-controls > .header__collections-link').click()
    cy.get('[data-product-id="350328854"] > .product-preview__content > .product-preview__area-photo > .product-preview__photo > .img-ratio > .img-ratio__inner > a > :nth-child(1) > .product-preview__img-1').click();
    cy.wait(2000) // Тут не факт , что времени на ожидания хватит . у меня этого было достаточно
    cy.get('.add-cart-counter__btn').click()
    cy.get('[data-add-cart-counter-plus=""]').click()
    cy.get('.add-cart-counter__detail').click()
    cy.get('.cart-controls > .button').click()
    cy.get('#client_surname').type('Пушка')
    cy.get('#client_contact_name').type('Колатушка')
    cy.get('#client_phone').type('+79998887766')
    cy.get('#client_email').type('asd@asd.ru')
    cy.get('#shipping_address_street').type('московский проспект')
    cy.get('#shipping_address_house').type('222')
    cy.get('#order_comment').type('Выбор элемента добавления в корзину-это смерть')
    cy.get('#checkout_buyer_fields > .co-input--required > .co-input-select > .co-input-field').select('Девочка')
    // рекаптчу я так и не смог пройти , через playwright нужно покупать ключ 2captcha
    cy.get('#create_order').click()
  })
})