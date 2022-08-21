/// <reference types="cypress" />



beforeEach(function() {
    //for the test account in order to login
    cy.fixture('testaccount').then(function(testdata){
        this.testUrl=testdata
        this.useraccount=testdata
        cy.visit(this.testUrl.apptestUrl)
    })

    //for the login page elements
    cy.fixture('homepageLoginElements').then(function(element){
        this.element=element
    })

    //for repository panel elements
    cy.fixture('repositorypanel').then(function(element){
        this.repositorynavbutton=element[0]
        this.repositorypanelslideoverview=element[1]
        this.repositorypaneltitle=element[2]
        this.studiessubmenu=element[4]
    })

    //for Studies page elements
    cy.fixture('studiespageElements').then(function(element){
        this.studiestitle=element[0]
        this.techstudytitle=element[1]
        this.threebarbutton=element[2]
        this.viewsubmenu=element[3]
        this.editsubmenu=element[4]
        this.Removethisstudysubmenu=element[5]
        this.Transitionthisstudysubmenu=element[6]
    })

    //for User Profile panel elements
    cy.fixture('userprofilepanel').then(function(element){
        this.userprofilenavbutton=element[0]
        this.userprofileslideoverviewpanel=element[1]
        this.signoutsubmenulink=element[2]
    })
})

describe('USER SCENARIO TEST SUITE', function(){
    it('TEST CASE SCRIPT', function(){

        //Login to ryze 
        cy.login(this.element.usernameInputfield, this.element.passwordInputfield, this.element.signinbutton, this.useraccount.username, this.useraccount.password)
        cy.title().should('eq','Home - ryze') // --- > this will test for expected page title

        //assert the expected url after a successful login is correct
        cy.url().should('eq', 'https://ryze-staging.formedix.com/#/08a379ed-eed1-4502-be5f-2c7b086b0b4b/dashboard')

        //assert there is Repository navigation button and with correct name
        cy.assertElementandTextusingXPATH(this.repositorynavbutton.repositorynamexpath, this.repositorynavbutton.buttonName)

        //mouse hover to Repository navigation button
        cy.hovermouseto(this.repositorynavbutton.repository, this.repositorypanelslideoverview.repositorypanel)

        //assert that correct panel title and is visible called Repository
        //I am using xpath asserting the text
        cy.assertTextusingXPATH(this.repositorypaneltitle.repositorypaneltitlexpath, this.repositorypaneltitle.paneltitle)

        //verify the sub menu title called Studies
        cy.assertTextusingXPATH(this.studiessubmenu.studiessubmenuLabelxpath, this.studiessubmenu.studiessubmenuLabel)
        //verify the sub menu Studies descriptions
        cy.assertTextusingXPATH(this.studiessubmenu.studiesdescriptionLabelxpath, this.studiessubmenu.submenubuttondescription)
        //I am using xpath asserting the text

        // then lastly click onto the sub menu list called Studies ---> I use css selector 
        cy.clickLinkbutton(this.studiessubmenu.studiessubmenubutton)

        //Mouse hover out
        cy.hovermouseOut(this.repositorynavbutton.repository)
       
        //assert the expected url after I click the Studies
        cy.url().should('eq','https://ryze-staging.formedix.com/#/08a379ed-eed1-4502-be5f-2c7b086b0b4b/STUDY')

        //assert the expected title page which is Studies
        cy.assertTextusingXPATH(this.studiestitle.studiestitlexpath, this.studiestitle.title)
        
        //assert the expected title Tech Study
        cy.assertTextusingXPATH(this.techstudytitle.techstudytitlexpath, this.techstudytitle.title) 

        //assert that there is a 3 bar button or hamburger button on the right hand side of the studies page
        cy.clickLinkbutton(this.threebarbutton.threebarbuttonmenu)

        //assert that there is a sub menu list in that 3 bar button called View
        cy.assertElementandText(this.viewsubmenu.viewsubmenu, this.viewsubmenu.label)

        //assert that there is a sub menu list in that 3 bar button called Edit
        cy.assertElementandText(this.editsubmenu.editsubmenu, this.editsubmenu.label)

        //assert that there is a sub menu list in that 3 bar button called Remove this study
        cy.assertElementandText(this.Removethisstudysubmenu.Removethisstudysubmenu, this.Removethisstudysubmenu.label)

        //assert that there is a sub menu list in that 3 bar button called Transition this study
        cy.assertElementandText(this.Transitionthisstudysubmenu.Transitionthisstudysubmenu, this.Transitionthisstudysubmenu.label)

        //assert there is User Profile navigation button and with correct name
        cy.assertElementandTextusingXPATH(this.userprofilenavbutton.userprofilebuttonnamexpath, this.userprofilenavbutton.buttonName)

        //mouse over to User Profile Navigation button
        cy.hovermouseto(this.userprofilenavbutton.userprofilenavbutton, this.userprofileslideoverviewpanel.userprofileslideoverviewpanel)

        //assert correct text called Sign out
        cy.assertTextusingXPATH(this.signoutsubmenulink.signoutsubmenulinktextxpath, this.signoutsubmenulink.signoutlabel)

        //assert sign out description
        cy.assertTextusingXPATH(this.signoutsubmenulink.signoutsubmenudescription, this.signoutsubmenulink.signoutsubmenudescriptiontext)

        //click Sign Out 
        cy.clickLinkbutton(this.signoutsubmenulink.signoutsubmenulink)

        //Mouse hover out
        cy.hovermouseOut(this.userprofilenavbutton.userprofilenavbutton)

        //assert expected url after succeesfully log out
        cy.url().should('eq', 'https://ryze-staging.formedix.com/')

        //assert logout text message
        cy.assertElementandTextusingXPATH(this.element.aftersignout, this.element.aftersignouttext)
    })

    
    
})