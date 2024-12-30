package com.vulnerable.tokenreceiver.utils;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

public class TokenLogger {
    private static final Logger logger = LoggerFactory.getLogger("com.tokenreceiver.token");

    public static void logMessage(String message) {
        logger.info(message);
    }

}
