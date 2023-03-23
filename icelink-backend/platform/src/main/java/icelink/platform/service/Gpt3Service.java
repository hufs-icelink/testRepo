package icelink.platform.service;

import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

@Service
public class Gpt3Service {
    private final RestTemplate restTemplate = new RestTemplate();
    private final String openaiApiKey = "<your-openai-api-key>";

    public String summarizeText(String inputText, int maxTokens, String modelEngine) {
        try {
            // Prepare the request
            String prompt = "Please summarize the following text:\n" + inputText + "\nSummary:";
            HttpHeaders headers = new HttpHeaders();
            headers.setContentType(MediaType.APPLICATION_JSON);
            headers.setBearerAuth(openaiApiKey);
            String requestBody = "{\"prompt\":\"" + prompt + "\",\"max_tokens\":" + maxTokens + ",\"temperature\":0.5,\"n\":1,\"stop\":null,\"model\":\"" + modelEngine + "\"}";
            HttpEntity<String> request = new HttpEntity<>(requestBody, headers);

            // Send the request
            ResponseEntity<String> response = restTemplate.exchange("https://api.openai.com/v1/completions", HttpMethod.POST, request, String.class);

            // Process the response
            String responseJson = response.getBody();
            return extractSummaryFromResponse(responseJson);
        } catch (Exception e) {
            e.printStackTrace();
            return null;
        }
    }

    private String extractSummaryFromResponse(String responseJson) {
        // Extract the summary from the response JSON
        // The response JSON looks like:
        // {"choices": [{"text": "This is a test text for summarization.", "index": 0, "logprobs": null, "finish_reason": "length"}], "created": 1634639067, "id": "cmpl-1YtD1Gd1xRYxgeRaC9XGVho8", "model": "text-davinci-002"}
        // We need to extract the "text" field from the "choices" array
        try {
            ObjectMapper mapper = new ObjectMapper();
            JsonNode rootNode = mapper.readTree(responseJson);
            JsonNode choicesNode = rootNode.path("choices");
            if (choicesNode.isArray() && choicesNode.size() > 0) {
                JsonNode textNode = choicesNode.get(0).path("text");
                return textNode.asText();
            } else {
                return null;
            }
        } catch (Exception e) {
            e.printStackTrace();
            return null;
        }
    }
}
