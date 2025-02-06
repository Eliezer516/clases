<script>
  import { onMount } from 'svelte';
  import { pipeline, TextStreamer } from "@huggingface/transformers";

  let message = "Solve the equation: x^2 - 3x + 2 = 0";
  let response = "";
  let loading = false;

  onMount(async () => {
    const generator = await pipeline(
      "text-generation",
      "onnx-community/DeepSeek-R1-Distill-Qwen-1.5B-ONNX",
      { dtype: "q4f16" }
    );

    const messages = [{ role: "user", content: message }];
    const streamer = new TextStreamer(generator.tokenizer, {
      skip_prompt: true,
    });

    loading = true;

    try {
      const output = await generator(messages, {
        max_new_tokens: 512,
        do_sample: false,
        streamer
      });
      response = output[0].generated_text.at(-1).content;
      console.log(response)
    } catch (error) {
      response = "Error generating response.";
      console.error(error);
    } finally {
      loading = false;
    }
  });
</script>

<style>
  .chat-container {
    padding: 1rem;
    border: 1px solid #ccc;
    border-radius: 8px;
    max-width: 600px;
    margin: auto;
  }

  .loading {
    color: blue;
  }

  .response {
    margin-top: 1rem;
    font-weight: bold;
  }
</style>

<div class="chat-container">
  <h2>Chatbot Response</h2>
  {#if loading}
    <p class="loading">Generating response...</p>
  {:else}
    <p class="response">{response}</p>
  {/if}
</div>