### Website: https://YanisThao.github.io/Best-Friend-Finder/

### Best Friend Finder
Best Friend Finder is an application that connects potential pet owners with adoptable pets. Using the Petfinder API, it allows users to search for pets based on specific criteria, helping them find the perfect companion from various shelters and rescues.

### API Documentation
The application utilizes the Petfinder API, which provides extensive information on adoptable pets and adoption organizations. Detailed instructions on how to authenticate, make requests, and handle responses from the API can be found in the linked documentation.

### Features
Pet Search: Users can search for pets by type, breed, size, age, and location.
Detailed Pet Profiles: Each pet profile provides comprehensive details including photos, health status, and shelter information.
Shelter Information: Access detailed data about various shelters and rescues.
Data Utilization
Data Format
The API returns data in JSON format, which is integrated directly into the application.
### Key Endpoints
Animals Endpoint: Fetches detailed information about pets, which is used to populate pet profiles and search results.
Organizations Endpoint: Provides information about shelters and rescues, enhancing pet profiles with additional context about pet locations.

## Petfinder API

The Petfinder API provides access to an extensive database of information about various types of pets available for adoption. It is a robust tool for accessing details about pet breeds, adoption organizations, and specific adoptable pets. This API is crucial for developing applications that intend to help users find pets to adopt by providing detailed, searchable pet information.

### API Documentation

The Petfinder API documentation is available [here](https://www.petfinder.com/developers/). This documentation provides all necessary details on how to authenticate, make requests, and handle responses from the API.

### Data Description

**Data Format:**

- The API returns data in JSON format, which facilitates easy integration into web applications using JavaScript or other languages that handle JSON.

**Key Data Utilized:**

- **Animals endpoint:** Lists available pets, which can be filtered by type, breed, location, size, age, and more. Each animal's data includes:
  - `id`
  - `type`
  - `breed`
  - `age`
  - `gender`
  - `size`
  - `location`
  - `status`
  - `photo` URLs
  - `description`
  - `contact` information for the shelter or rescuer

For this project, the focus will be primarily on the Animals and Organizations endpoints:

Animals endpoint: Utilized to fetch and display a list of pets based on user search criteria. This helps users find pets by breed, location, age, etc. The details fetched from this endpoint are used to populate individual pet profiles on the application, providing potential adopters with all the necessary information to make an informed decision.
Organizations endpoint: Used to provide detailed information about the shelters and rescue organizations. This is particularly useful for users who want to learn more about where a pet is located or wish to explore other pets housed at the same organization.

**Data Manipulation**
Filtering and Sorting: The API data may need to be filtered and sorted to match user queries effectively. For instance, users may search for pets within a specific location or of a certain breed.
Data Clean-Up: Some of the data returned from the API, such as descriptions and contact information, may require cleanup or formatting to ensure consistency and readability in the application interface.
Challenges and Considerations

API Rate Limits: Ensuring the application respects the API's rate limits to prevent service interruptions.
Data Privacy: Handling any personal information, such as contact details of adoption centers, responsibly.

**Future Enhancements**
Enhanced Search Capabilities: Including more advanced filtering options such as sorting by newest additions or pets in urgent need of adoption.
User Accounts: Allowing users to create accounts to save favorite pets and receive notifications when new pets meet their search criteria.

Conclusion
The Petfinder API is integral to this project, providing comprehensive data that is essential for helping users connect with adoptable pets. By leveraging this API, the application aims to streamline the adoption process and increase the visibility of animals in need of homes
