import "cypress-file-upload"
describe('File uploads', () => { // Teste para upload de um único arquivo
    it('Single file upload', () => {
         // Visita a página de upload de arquivos
        cy.visit("https://the-internet.herokuapp.com/upload");
        // Anexa o arquivo especificado ao campo de upload
        cy.get("#file-upload").attachFile("Nome do ficheiro"); //Dentro do attachFile colocamos o nome do ficheiro que queremos, este ficheiro tem que ser colocado primeiro na pasta "FIXTURES"
        // Clica no botão de envio de arquivo
        cy.get("#file-submit").click();
        // Aguarda a resposta após o envio do arquivo e verifica se o texto "File Uploaded!" está presente
        cy.wait(5000);
        cy.get("#content > div > h3").should("have.text","File Uploaded!");

    });
    it(' file upload - rename', () => { // Teste para upload de arquivo com renomeação
          // Visita a página de upload de arquivos
        cy.visit("https://the-internet.herokuapp.com/upload");
        // Anexa o arquivo especificado ao campo de upload e define um novo nome para o arquivo
        cy.get("#file-upload").attachFile({filePath:"Nome do ficheiro", fileName:"myfile.pdf"}); //Dentro do attachFile colocamos o nome do ficheiro que queremos, este ficheiro tem que ser colocado primeiro na pasta "FIXTURES"
        // Clica no botão de envio de arquivo
        cy.get("#file-submit").click();
         // Aguarda a resposta após o envio do arquivo e verifica se o texto "File Uploaded!" está presente
        cy.wait(5000);
        cy.get("#content > div > h3").should("have.text","File Uploaded!");
    });
    it('file upload - drag and drop', () => { // Teste para upload de arquivo por arrastar e soltar
        // Visita a página de upload de arquivos
        cy.visit("https://the-internet.herokuapp.com/upload");
        // Anexa o arquivo especificado por meio de arrastar e soltar
        cy.get("#drag-drop-upload").attachFile("Nome do ficheiro",{subjectType:"drag-n-drop"});
        // Aguarda a exibição do nome do arquivo após o upload
        cy.wait(5000);
        cy.get("#drag-drop-upload > div > div.dz-details")
            .contains("Nome do Ficheiro");
    });
    it('Multiple files upload', () => { // Teste para upload de múltiplos arquivos
        // Visita a página de upload de arquivos múltiplos
        cy.visit("https://davidwalsh.name/demo/multiple-file-upload.php");
        // Anexa os arquivos especificados ao campo de upload
        cy.get("#filesToUpload").attachFile(["Nome do ficheiro", "Nome do ficheiro2"]);
         // Aguarda a exibição dos arquivos selecionados após o upload
        cy.wait(5000);
        cy.get("#main > div > p:nth-child(6) > strong").should("contain.text","Files You Selected:");
    });
    it('file upload - shadow dom', () => { // Teste para upload de arquivo dentro de um shadow DOM
         // Visita a página com upload de arquivo dentro de um shadow DOM
        cy.visit("https://www.htmlelements.com/demos/fileupload/shadow-dom/index.htm");
        // Anexa o arquivo especificado ao campo de upload dentro de um shadow DOM
        cy.get('#fileUploadc61f > div.smart-container > div.smart-file-upload-header > input', {includeShadowDom:true}).attachFile("Nome do Ficheiro");
        // Aguarda a exibição do nome do arquivo após o upload
        cy.wait(5000);
        cy.get("#fileUploadc61fFile1Name", {includeShadowDom:true}).contains("Nome do ficheiro");
    });
});