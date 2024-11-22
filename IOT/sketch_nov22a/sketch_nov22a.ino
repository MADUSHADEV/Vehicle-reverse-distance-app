#include <WiFi.h>
#include <HTTPClient.h>

const char *ssid = "Madusha2001";
const char *password = "root8525";

NetworkServer server(80);

void setup() {
  Serial.begin(115200);

  pinMode(13, OUTPUT);

  WiFi.begin(ssid, password);

  while (WiFi.status() != WL_CONNECTED) {
    delay(500);
    Serial.print("connecting.....");
  }

  // Print the IP address once connected
  Serial.println("Connected!");
  Serial.print("IP Address: ");
  Serial.println(WiFi.localIP());

  server.begin();
}

void loop() {

  NetworkClient client = server.accept();
  if (client) {
    Serial.write("new client. ");
    String currentLine = "";
    while (client.connected()) {
      if (client.available()) {
        char c = client.read();
        // Serial.pr;
        currentLine += c;
        if (c == '\n') {
          Serial.println(currentLine);
          if (currentLine.startsWith("GET /?param=1")) {
            digitalWrite(13, HIGH);
          } else {
            digitalWrite(13, LOW);
          }
          break;
        }
      }
    }
    client.stop();
    Serial.println("Client Disconnected");
  }
}
