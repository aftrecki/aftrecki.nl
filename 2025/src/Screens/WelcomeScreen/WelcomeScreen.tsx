import {FunctionComponent, useEffect, useState} from 'react';

import "./WelcomeScreen.css";

export const WelcomeScreen: FunctionComponent = () => {

    const legacyIndex = "<head>\n" +
        "    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" />\n" +
        "    <link rel=\"icon\" href=\"archive/2024/resources/forest.svg\" />\n" +
        "    <title>AftreCKI 2024</title>\n" +
        "    <style>\n" +
        "        iframe {\n" +
        "           border: none;\n" +
        "           width: 100vw;\n" +
        "           height: 100vh;\n" +
        "        }\n" +
        "     </style>\n" +
        "</head>\n" +
        "<body style=\"margin: 0;\">\n" +
        "    <iframe src=\"archive/2024/index.html\"></iframe>\n" +
        "</body>\n"

    return <div dangerouslySetInnerHTML={{__html: legacyIndex}}/>
} 