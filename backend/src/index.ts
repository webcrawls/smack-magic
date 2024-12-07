export default {
    async fetch(request): Promise<Response> {
        function handleCors(response: Response): Response {
            response.headers.set('Access-Control-Allow-Origin', '*');
            response.headers.set('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
            response.headers.set('Access-Control-Allow-Headers', 'Content-Type');
            return response;
        }

        if (request.method === 'OPTIONS') {
            let response = new Response(null, { status: 204 });
            return handleCors(response);
        }

        if (request.method === "POST") {
            const { name, content } = await request.json();
            const date = new Date().toISOString();

			// todo: MAYBE geolocation at the most
			// todo: cuter embed design

            const embed = {
                username: "Smack Magic Testimonials",
                embeds: [
                    {
                        title: "+ someone wrote a testimonial",
                        fields: [
                            { name: "name", value: name, inline: false },
                            { name: "date", value: date, inline: false },
                            { name: "content", value: content },
                        ]
                    }
                ]
            };

            const webhookUrl = "https://discord.com/api/webhooks/1314103624506540102/31OmUGZz3dNvPRyMqOuw7ukrn8XSNHs63mwomfMHbo2ZNoHgw27VGAagb6BWhPFu4MkC";

            await fetch(webhookUrl, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(embed)
            });

            let response = new Response("Testimonial sent to Discord webhook.");
            return handleCors(response);
        } else {
            let response = new Response("Method not allowed", { status: 405 });
            return handleCors(response);
        }
    },
} satisfies ExportedHandler;