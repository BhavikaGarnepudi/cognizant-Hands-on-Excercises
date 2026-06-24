
public class Main {
    public static void main(String[] args) {

        DocumentFactory factory;
        Document document;

        // Word
        factory = new WordDocumentFactory();
        document = factory.createDocument();
        document.open();
        document.save();
        document.close();

        System.out.println("---");

        // PDF
        factory = new PdfDocumentFactory();
        document = factory.createDocument();
        document.open();
        document.save();
        document.close();

        System.out.println("---");

        // Excel
        factory = new ExcelDocumentFactory();
        document = factory.createDocument();
        document.open();
        document.save();
        document.close();
    }
}
