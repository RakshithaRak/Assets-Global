const Disclaimer = () => {
    return (
        <main className="disclaimer-container">
            <meta charSet="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <title>Disclaimer for Assets Global</title>
            <style
                dangerouslySetInnerHTML={{
                    __html:
                        "\n        body {\n            font-family: Arial, sans-serif;\n            margin: 0;\n            padding: 0;\n            background-color: #f4f4f4;\n            color: #333;\n        }\n        .container {\n            max-width: 800px;\n            margin: 50px auto;\n            padding: 20px;\n            background-color: #fff;\n            border-radius: 8px;\n            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);\n        }\n        h1, h2 {\n            color: #4CAF50;\n        }\n        p {\n            line-height: 1.6;\n        }\n        a {\n            color: #4CAF50;\n            text-decoration: none;\n        }\n        a:hover {\n            text-decoration: underline;\n        }\n    "
                }}
            />
            <div className="container">
                <h1>Disclaimer for Assets Global</h1>
                <p>
                    If you require any more information or have any questions about our site's
                    disclaimer, please feel free to contact us by email at{" "}
                    <a href="mailto:info@assetsglobal.in">info@assetsglobal.in</a>
                </p>
                <h2>Disclaimers for Assets Global</h2>
                <p>
                    All the information on this website -{" "}
                    <a href="https://www.assetsglobal.in/">https://www.assetsglobal.in/</a> -
                    is published in good faith and for general information purpose only.
                    Assets Global does not make any warranties about the completeness,
                    reliability and accuracy of this information. Any action you take upon the
                    information you find on this website (Assets Global), is strictly at your
                    own risk. Assets Global will not be liable for any losses and/or damages
                    in connection with the use of our website.
                </p>
                <p>
                    From our website, you can visit other websites by following hyperlinks to
                    such external sites. While we strive to provide only quality links to
                    useful and ethical websites, we have no control over the content and
                    nature of these sites. These links to other websites do not imply a
                    recommendation for all the content found on these sites. Site owners and
                    content may change without notice and may occur before we have the
                    opportunity to remove a link which may have gone 'bad'.
                </p>
                <p>
                    Please be also aware that when you leave our website, other sites may have
                    different privacy policies and terms which are beyond our control. Please
                    be sure to check the Privacy Policies of these sites as well as their
                    "Terms of Service" before engaging in any business or uploading any
                    information.
                </p>
                <h2>Consent</h2>
                <p>
                    By using our website, you hereby consent to our disclaimer and agree to
                    its terms.
                </p>
                <h2>Update</h2>
                <p>
                    Should we update, amend or make any changes to this document, those
                    changes will be prominently posted here.
                </p>
            </div>
        </main>

    )
}

export default Disclaimer