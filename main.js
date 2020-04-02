
function batchDeletePromotions() {
    // include one or more categories below
    // valid categories include ["primary", "promotions", "social", "updates", "forums"];
    // category descriptions: https://support.google.com/mail/answer/3094596?hl=en
    var categories = ["social", "promotions", "forums"];
    
    var batchSize = 100 // Process up to 100 threads at once
    for (i = 0; i < categories.length; i++) {
    var threads = GmailApp.search('label:inbox category:'+categories[i]+' older_than:7d');
    for (j = 0; j < threads.length; j+=batchSize) {
    GmailApp.moveThreadsToTrash(threads.slice(j, j+batchSize));
    }
    }
    }