# Changelog

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

### [0.5.41](https://github.com/confere-stores/app-ses/compare/v0.5.40...v0.5.41) (2021-05-06)


### Features

* change to confere-stores ([f7b80ca](https://github.com/confere-stores/app-ses/commit/f7b80ca7fd1a29e0b2534595484827f3d4892dc8))


### Bug Fixes

* remove private from package ([380ad7e](https://github.com/confere-stores/app-ses/commit/380ad7ecfaeda86b2550c465043797b6e833c39f))

### [0.5.40](https://github.com/ecomclub/app-ses/compare/v0.5.39...v0.5.40) (2021-03-03)

### [0.5.39](https://github.com/ecomclub/app-ses/compare/v0.5.38...v0.5.39) (2021-03-03)

### [0.5.38](https://github.com/ecomclub/app-ses/compare/v0.5.37...v0.5.38) (2021-02-03)

### [0.5.37](https://github.com/ecomclub/app-ses/compare/v0.5.36...v0.5.37) (2020-11-25)

### [0.5.36](https://github.com/ecomclub/app-ses/compare/v0.5.35...v0.5.36) (2020-11-23)

### [0.5.35](https://github.com/ecomclub/app-ses/compare/v0.5.34...v0.5.35) (2020-11-23)

### [0.5.34](https://github.com/ecomclub/app-ses/compare/v0.5.26...v0.5.34) (2020-10-29)


### Bug Fixes

* **email-content:** skip new order email for negative status ([243f397](https://github.com/ecomclub/app-ses/commit/243f3979a2120e56915bebbc2dabd9b7a98ea813))
* **email-content:** skip new order email when main status is cancelled ([1222444](https://github.com/ecomclub/app-ses/commit/12224440a5a81b63fd1f4e7a97e8102067eb1ce3))
* **email-notification:** ensure considering last valid order status ([2d971d2](https://github.com/ecomclub/app-ses/commit/2d971d2984b1fb16391bbf317c92c0e44675e413))
* **email-notification:** fix checking last notified status ([8ecc673](https://github.com/ecomclub/app-ses/commit/8ecc67325e74aa682d4b7d797bd75dce51d618a5))
* **email-notification:** patch last valid status record ([d9c88c7](https://github.com/ecomclub/app-ses/commit/d9c88c74bf7e91c76445fa6c41fcc4212e40ee82))
* **email-notification:** preset subject and message after status check ([dcca6a5](https://github.com/ecomclub/app-ses/commit/dcca6a5ac8462c6092bf3c866537b35d5fcf83b1))
* **email-notification:** skip under analysis status for recent orders ([2279a59](https://github.com/ecomclub/app-ses/commit/2279a59a653e4be4b05213d3b17b4906884206b6))
* **retry-delay:** edit range delay for email retry to 30000~180000 ([02910f1](https://github.com/ecomclub/app-ses/commit/02910f1fddbd80cd691a1de12fa35f438b3191bc))

### [0.5.33](https://github.com/ecomclub/app-ses/compare/v0.5.32...v0.5.33) (2020-10-18)


### Bug Fixes

* **email-notification:** ensure considering last valid order status ([2d971d2](https://github.com/ecomclub/app-ses/commit/2d971d2984b1fb16391bbf317c92c0e44675e413))
* **email-notification:** patch last valid status record ([d9c88c7](https://github.com/ecomclub/app-ses/commit/d9c88c74bf7e91c76445fa6c41fcc4212e40ee82))
* **email-notification:** preset subject and message after status check ([dcca6a5](https://github.com/ecomclub/app-ses/commit/dcca6a5ac8462c6092bf3c866537b35d5fcf83b1))

### [0.5.32](https://github.com/ecomclub/app-ses/compare/v0.5.31...v0.5.32) (2020-10-18)


### Bug Fixes

* **email-notification:** skip under analysis status for recent orders ([2279a59](https://github.com/ecomclub/app-ses/commit/2279a59a653e4be4b05213d3b17b4906884206b6))

### [0.5.31](https://github.com/ecomclub/app-ses/compare/v0.5.30...v0.5.31) (2020-10-18)


### Bug Fixes

* **email-notification:** fix checking last notified status ([8ecc673](https://github.com/ecomclub/app-ses/commit/8ecc67325e74aa682d4b7d797bd75dce51d618a5))

### [0.5.30](https://github.com/ecomclub/app-ses/compare/v0.5.29...v0.5.30) (2020-10-18)


### Bug Fixes

* **email-content:** skip new order email when main status is cancelled ([1222444](https://github.com/ecomclub/app-ses/commit/12224440a5a81b63fd1f4e7a97e8102067eb1ce3))

### [0.5.29](https://github.com/ecomclub/app-ses/compare/v0.5.28...v0.5.29) (2020-10-18)


### Bug Fixes

* **email-content:** skip new order email for negative status ([243f397](https://github.com/ecomclub/app-ses/commit/243f3979a2120e56915bebbc2dabd9b7a98ea813))

### [0.5.28](https://github.com/ecomclub/app-ses/compare/v0.5.27...v0.5.28) (2020-10-08)

### [0.5.27](https://github.com/ecomclub/app-ses/compare/v0.5.26...v0.5.27) (2020-10-08)


### Bug Fixes

* **retry-delay:** edit range delay for email retry to 30000~180000 ([02910f1](https://github.com/ecomclub/app-ses/commit/02910f1fddbd80cd691a1de12fa35f438b3191bc))

### [0.5.26](https://github.com/ecomclub/app-ses/compare/v0.5.25...v0.5.26) (2020-09-28)


### Bug Fixes

* **deps:** update @ecomplus/transactional-mails to v1.8.0 ([0d183f7](https://github.com/ecomclub/app-ses/commit/0d183f774343a476ea038d020e5ac4c13cbd907c))
* **email-retry:** skip retry when error 4xx received from store api ([d0a4ed5](https://github.com/ecomclub/app-ses/commit/d0a4ed52e3a2cdb24f74d45b5c8fd64b1a87e957))

### [0.5.25](https://github.com/ecomclub/app-ses/compare/v0.5.21...v0.5.25) (2020-09-28)
### [0.5.25](https://github.com/ecomclub/app-ses/compare/v0.5.24...v0.5.25) (2020-09-23)


### Bug Fixes

* **deps:** fix @ecomplus/application-sdk version (sqlite) ([25fa501](https://github.com/ecomclub/app-ses/commit/25fa501b7c553a7302719d0c3cda92645657e49d))
* **deps:** update @ecomplus/application-sdk and transactional-mails ([8ebd9ca](https://github.com/ecomclub/app-ses/commit/8ebd9cad9dcccd9e1d1380660af9b4216a13f126))
* **retry:** one minute and retry on first fail ([75666bd](https://github.com/ecomclub/app-ses/commit/75666bd266797a598ed2f3cef5446f744bc28302))
* **deps:** update @ecomplus/transactional-mails to v1.8.0 ([0d183f7](https://github.com/ecomclub/app-ses/commit/0d183f774343a476ea038d020e5ac4c13cbd907c))
* **email-retry:** skip retry when error 4xx received from store api ([d0a4ed5](https://github.com/ecomclub/app-ses/commit/d0a4ed52e3a2cdb24f74d45b5c8fd64b1a87e957))

### [0.5.24](https://github.com/ecomclub/app-ses/compare/v0.5.23...v0.5.24) (2020-09-22)

### [0.5.23](https://github.com/ecomclub/app-ses/compare/v0.5.22...v0.5.23) (2020-09-22)


### Bug Fixes

* **deps:** fix @ecomplus/application-sdk version (sqlite) ([25fa501](https://github.com/ecomclub/app-ses/commit/25fa501b7c553a7302719d0c3cda92645657e49d))

### [0.5.22](https://github.com/ecomclub/app-ses/compare/v0.5.21...v0.5.22) (2020-09-22)


### Bug Fixes

* **deps:** update @ecomplus/application-sdk and transactional-mails ([8ebd9ca](https://github.com/ecomclub/app-ses/commit/8ebd9cad9dcccd9e1d1380660af9b4216a13f126))
* **retry:** one minute and retry on first fail ([75666bd](https://github.com/ecomclub/app-ses/commit/75666bd266797a598ed2f3cef5446f744bc28302))

### [0.5.21](https://github.com/ecomclub/app-ses/compare/v0.5.20...v0.5.21) (2020-09-22)


### Bug Fixes

* **email-notification:** included in_separation status ([b1cb32e](https://github.com/ecomclub/app-ses/commit/b1cb32ec5f1c97cafe928d8636fa76a69b528762))

### [0.5.20](https://github.com/ecomclub/app-ses/compare/v0.5.19...v0.5.20) (2020-09-02)

### [0.5.19](https://github.com/ecomclub/app-ses/compare/v0.5.18...v0.5.19) (2020-09-01)

### [0.5.18](https://github.com/ecomclub/app-ses/compare/v0.5.17...v0.5.18) (2020-07-15)

### [0.5.17](https://github.com/ecomclub/app-ses/compare/v0.5.16...v0.5.17) (2020-07-09)

### [0.5.16](https://github.com/ecomclub/app-ses/compare/v0.5.15...v0.5.16) (2020-07-08)

### [0.5.15](https://github.com/ecomclub/app-ses/compare/v0.5.14...v0.5.15) (2020-07-06)

### [0.5.14](https://github.com/ecomclub/app-ses/compare/v0.5.13...v0.5.14) (2020-07-05)


### Bug Fixes

* **templates:** preventing errors with stores without logo ([9dce730](https://github.com/ecomclub/app-ses/commit/9dce730f534660e4d3806de6c1822d2f0878ff21))

### [0.5.13](https://github.com/ecomclub/app-ses/compare/v0.5.12...v0.5.13) (2020-06-30)

### [0.5.12](https://github.com/ecomclub/app-ses/compare/v0.5.11...v0.5.12) (2020-06-01)

### [0.5.11](https://github.com/ecomclub/app-ses/compare/v0.5.10...v0.5.11) (2020-05-28)

### [0.5.10](https://github.com/ecomclub/app-ses/compare/v0.5.9...v0.5.10) (2020-05-21)

### [0.5.9](https://github.com/ecomclub/app-ses/compare/v0.5.8...v0.5.9) (2020-05-12)

### [0.5.8](https://github.com/ecomclub/app-ses/compare/v0.5.7...v0.5.8) (2020-05-11)


### Features

* custom_message for transactional-mails (optionaly) ([f7130cf](https://github.com/ecomclub/app-ses/commit/f7130cfecdb8eba66e9c6dd3333b7f735f113c71))
* custom_message for transactional-mails (optionaly) ([b1ef171](https://github.com/ecomclub/app-ses/commit/b1ef171360c87437568146a9d2812f91cc13da54))


### Bug Fixes

* **build:** market publish script ([471ca34](https://github.com/ecomclub/app-ses/commit/471ca34b4ee89a7cb911fa4b04ff2041ab7a5e8a))
* **publish:market:** install dotenv ([7f9f519](https://github.com/ecomclub/app-ses/commit/7f9f51963ffc38d45c6f582fb182b4cc25e49ed5))

### [0.5.7](https://github.com/ecomclub/app-ses/compare/v0.5.6...v0.5.7) (2020-04-21)


### Features

* **assets:** creating description file ([18ca175](https://github.com/ecomclub/app-ses/commit/18ca1756842e5049f6f63f45ee04ecc6d0c8a297))
* **icon:** creating a clearer icon for users ([4c83403](https://github.com/ecomclub/app-ses/commit/4c83403407c0e78cbb8e569292a7a127e21184a4))

### [0.5.6](https://github.com/ecomclub/app-ses/compare/v0.5.5...v0.5.6) (2020-04-17)

### [0.5.5](https://github.com/ecomclub/app-ses/compare/v0.5.4...v0.5.5) (2020-04-17)

### [0.5.4](https://github.com/ecomclub/app-ses/compare/v0.5.3...v0.5.4) (2020-04-17)

### [0.5.3](https://github.com/ecomclub/app-ses/compare/v0.5.2...v0.5.3) (2020-04-17)

### [0.5.2](https://github.com/ecomclub/app-ses/compare/v0.5.1...v0.5.2) (2020-04-17)

### [0.5.1](https://github.com/ecomclub/app-ses/compare/v0.5.0...v0.5.1) (2020-04-17)

## [0.5.0](https://github.com/ecomclub/app-ses/compare/v0.4.5...v0.5.0) (2020-04-17)

### [0.4.5](https://github.com/ecomclub/app-ses/compare/v0.4.4...v0.4.5) (2020-04-17)

### [0.4.4](https://github.com/ecomclub/app-ses/compare/v0.4.3...v0.4.4) (2020-04-15)

### [0.4.3](https://github.com/ecomclub/app-ses/compare/v0.4.2...v0.4.3) (2020-04-15)

### [0.4.2](https://github.com/ecomclub/app-ses/compare/v0.3.0...v0.4.2) (2020-04-15)


### Features

* fetch data from store-api ([d642069](https://github.com/ecomclub/app-ses/commit/d642069cfedb00865a739976e9784c1e546be2df))
* generate hash for unsubscribe links ([3d09fa3](https://github.com/ecomclub/app-ses/commit/3d09fa3b2ecc8965ac57314c82d7d465cebf8f54))
* handle amazon bounce and complaint notifications ([1ceb23a](https://github.com/ecomclub/app-ses/commit/1ceb23a8ca97b3b2b0dd293d6c66141d2518a7e0))
* i18n for email subject ([b367faa](https://github.com/ecomclub/app-ses/commit/b367faa5860a98f242d14f5ff49725457b862e4a))
* inserts user into an unsubscribed list ([3e186cb](https://github.com/ecomclub/app-ses/commit/3e186cb153e92a681a0f5b68522cee19a8261fa4))
* new mail actions ([096303b](https://github.com/ecomclub/app-ses/commit/096303ba388497dc81ce8799ef51e1b46f3b1604))
* new mail templates ([c2d6ad7](https://github.com/ecomclub/app-ses/commit/c2d6ad7535640cb0535c84650504d5e7492d41a3))
* post hidden_metafields if some resource is unavailable ([32685b1](https://github.com/ecomclub/app-ses/commit/32685b196919aa4d2b202b66fc712c93e8c421be))
* register carts to check if they were later abandoned ([1aa2966](https://github.com/ecomclub/app-ses/commit/1aa296631d86adb964e7b8a7190e0ceb9c685af6))
* search for abandoned cart ([cecdff5](https://github.com/ecomclub/app-ses/commit/cecdff598b2009a6c2212ecb2070b451d4459649))
* sent abandoned carts ([2d16327](https://github.com/ecomclub/app-ses/commit/2d1632791b8f011a0591be825e1351c3b1c9abd2))
* **mail-dispach:** using setTimeOut to create order queue ([3299fbe](https://github.com/ecomclub/app-ses/commit/3299fbeffe7350c27adc057a972ffff3e6172060))
* start using @ecomplus/transactional-mails ([ee0590e](https://github.com/ecomclub/app-ses/commit/ee0590e24ee900ba031fd9001eebb9b9cdaa2f6d))
* unsubscribe mail route ([9a6855a](https://github.com/ecomclub/app-ses/commit/9a6855ab22f3c13039e6889dfeaaafde8c937241))
* uses language in the application configuration ([dca5c33](https://github.com/ecomclub/app-ses/commit/dca5c332d4cedec6c480fe0b50968c2eabd90cbf))
* using express-app-boilerplate ([20a2864](https://github.com/ecomclub/app-ses/commit/20a28646afe0c1a49582acf6f7d25261089afdc7))
* using express-app-boilerplate ([a52d19f](https://github.com/ecomclub/app-ses/commit/a52d19fc726059ed767a9cefaf25908456e96250))
* using express-app-boilerplate ([391365b](https://github.com/ecomclub/app-ses/commit/391365b9dadbd613f2a5b36600e83fc5c0fc379f))


### Bug Fixes

* fix app.json (JSON syntax error) ([0a11240](https://github.com/ecomclub/app-ses/commit/0a11240d1123763cf7e063b960be39042bc085f1))
* sent headers and reply-to ([5661bae](https://github.com/ecomclub/app-ses/commit/5661baed715c8806889301f0c1187e23315d3317))
* **mail-triggers:** subject name ([83cada5](https://github.com/ecomclub/app-ses/commit/83cada51be9131368b244e1a19e38f80229564cf))
* **mail-triggers.js:** prevent sending repeated emails ([63351df](https://github.com/ecomclub/app-ses/commit/63351dfcb0ee86fb89b7f97d4a40cba2530766a9))
* **settings:** typo in cctolojista description ([970fdb6](https://github.com/ecomclub/app-ses/commit/970fdb62a11a565127e550ce44ff85023dbf70f1))
