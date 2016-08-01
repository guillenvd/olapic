Q1
A1: Yes, there is an Olapic integration with Demandware. In order to do this, please visit http://www.demandware.com/link-marketplace/olapic and click on the Download Integration button. You will need your Demandware Login Credential when you do this, so have them on hand. This integration allows you to build on top of our architecture.

Rationale/Sources: http://www.demandware.com/link-marketplace/olapic

Q2
A2: For ease of use, I would reccomend using our iOS SDK. If you want to make your own wrapper, go ahead and use the API, but we provide the SDK for your benefit.

Rationale/Sources: The SDK allows for pretty much all the same functionality as the API, only with a wrapper to be implemented into iOS.
http://photorank.me/api.html
https://github.com/Olapic/Olap ic-SDK-iOS

Q3
A3: Hi, how long ago did you update? It usually takes about 45 minutes to deploy the templates.

Rationale/Sources: If the changes were made less than 45 minutes ago, I would manually update for the customer if they requested an immediate change. If the update was older than 45 minutes, the first thing I would do is manually update, and if that did not work I would help them troubleshoot.

Q4
A4: Don't worry. Although our widget only supports IE9+, you still have the ability to use our platform. Other clients have frequently used our API as an alternative the widgets, so this is not a limiting factor at all. Let's take a look at how it works and see if it satisfies your requirements.

Rationale/Sources: Using the API is quite easy, and if the customer is shown how easy it is to use, they will likely be satisfied. Also, an in person demo can help alleviate many questions surrounding customer service, which only helps our case with a client on the fence.

Q5
A5: Hi, I'm so sorry about this. Here is your new API key: xxxxxxxxxxxx

Due to an error on my end I sent you a key that was expired. Please let me know if you are having any more problems. My number is XXX-XXX-XXXX, please call me if you need anything else.

Rationale/Sources: Own your mistakes and provide immediate solutions. This is the only way a customer will be satisfied.

Product feed inquiry

Client Response:
  Hi, I'm sorry, but I cannot yet import this into your account. There are several issues that need to be corrected, I have attached a report to this email. We ask all clients to validate their feed before sending them over. To do this, please do a schema validation using our XSD file that I have attached. We reccomend using xmllint (Command Line) to validate your feed against our XSD file. To do this, type this command in your terminal:
    xmllint -noout --schema olapicProductFeedV1_0.xsd my_company_feed.xml

  Also, here is the documentation concerning the Product Feed:
    http://olapic.github.io/PublicDocs/product-feed-full-public.html#updating-your-product-feed

  Please make a note about how to deliver your product feed. You have the three options - SFTP Account, FTP Account, and HTTP endpoint. Let me know how you would like to make your PF available to us so that I can assist you in doing this.


Rationale/Sources: http://olapic.github.io/PublicDocs/product-feed-full-public.html#updating-your-product-feed

I want to assist a client, but I do not want to do their work for them. They should have troubleshooting tools easily accessable, that I why I would link resources for them in one email.

Issues Caught:

mycompanyfeed.xml:1: parser error : Document labelled UTF-16 but has UTF-8 content
<?xml version="1.0" encoding="UTF-16"?>
                                     ^
mycompanyfeed.xml:14: parser error : expected '>'
ryUrl>
^
mycompanyfeed.xml:14: parser error : Opening and ending tag mismatch: CategoryUrl line 13 and Catego
ryUrl>
^
mycompanyfeed.xml:24: parser error : expected '>'
ageUrl>
^
mycompanyfeed.xml:24: parser error : Opening and ending tag mismatch: ImageUrl line 23 and Im
ageUrl>
^
mycompanyfeed.xml:50: parser error : expected '>'
rl>
^
mycompanyfeed.xml:50: parser error : Opening and ending tag mismatch: ProductUrl line 49 and ProductU
rl>
^
mycompanyfeed.xml:70: parser error : expected '>'
rl>
^
mycompanyfeed.xml:70: parser error : Opening and ending tag mismatch: ProductUrl line 69 and ProductU
rl>
^
mycompanyfeed.xml:86: parser error : xmlParseEntityRef: no name
            <Name>Awesome Possum T-shirt & Shorts Red</Name>
                                          ^
mycompanyfeed.xml:89: parser error : expected '>'
rl>
^
mycompanyfeed.xml:89: parser error : Opening and ending tag mismatch: ProductUrl line 88 and ProductU
rl>
^
mycompanyfeed.xml:92: parser error : xmlParseEntityRef: no name
Possum T-shirt & Shorts</Description>
                ^
mycompanyfeed.xml:109: parser error : expected '>'
rl>
^
mycompanyfeed.xml:109: parser error : Opening and ending tag mismatch: ProductUrl line 108 and ProductU
rl>
^
mycompanyfeed.xml:129: parser error : expected '>'
ductUrl>
^
mycompanyfeed.xml:129: parser error : Opening and ending tag mismatch: ProductUrl line 128 and Pro
ductUrl>
^
mycompanyfeed.xml:131: parser error : expected '>'
l>
^
mycompanyfeed.xml:131: parser error : Opening and ending tag mismatch: ImageUrl line 130 and ImageUr
l>
^


