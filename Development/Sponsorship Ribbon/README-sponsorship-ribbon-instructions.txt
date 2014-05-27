

Client submits the following assets:
 - logo image (100x30 or 88x30 transparent PNG)
 - three video thumbnail images (187x105)
 - a filled out PDF form with all of the copy, image and video placement details. It looks like this:

- In the PDF: click on the editable fields in order to see the text entered in them. Some fields may be left empty.

- The info from this form gets placed into our Sponsorship Series HTML template, which you can find on GitHub: AdDev/Templates/Sponshorship Ribbon/blank-sponsorship-ribbon.html

Fill out the labeled sponsor sections in the HTML with the information provided in the PDF.

(All placeholder text begins with '**' -- so you can find/remove it easily)

----------
Guide to fields:
----------

PDF numbered sections correspond to HTML section class names:
1. About Menu Tab -> section.sponsor-about
2. Video Menu Tab -> section.sponsor-videos
3. Resources Menu Tab -> section.sponsor-resources

<h3> - Series Ribbon Title
<h4> - Menu Tab Title
li.sponsor > span - "Sponsored by ADVERTISER NAME"
p.provided - "provided by ADVERTISER NAME"
p.call-to-action > a href - DFP click macro with provided CTA click through, e.g."%%CLICK_URL_UNESC%%http://dell.com"

Advertisers can have 6 or fewer resources (title, description and clickthrough) listed under the Resources tab. If no information is provided for a resource, then leave the tags blank (like the last one in the template).

----------
Deliverables:
-----------
- html file is uploaded to facelift for AdOps

----------
Testing in DFP:
----------

Schedule it to this line item/creative:

https://www.google.com/dfp/7070#delivery/PreviewCreative/orderId=137449949&lineItemId=48538229&creativeId=23587649909

Test on your local environment via this link:
http://127.0.0.1:8000/story/travel/2013/04/08/pros-on-the-road-theresa-donnelly/2026671/

If the link to that article to test doesn't work for you, then you might need to make sure your local environment is running production data:

SITE_ENV=prod python manage.py runserver


