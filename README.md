# OpenTelemetry Common API

There isn't really a formal Common API with OpenTelemetry, but there are some elements that are common across signal types:

- [Attributes](https://opentelemetry.io/docs/specs/otel/common)
- Exporters
  - [MetricExporter](https://opentelemetry.io/docs/specs/otel/metrics/sdk/#metricexporter)
  - [SpanExporter](https://opentelemetry.io/docs/specs/otel/trace/sdk/#span-exporter)
  - [LogRecordExporter](https://opentelemetry.io/docs/specs/otel/trace/sdk/#span-exporter)

This module contains the relevant APIs that are either explicitly defined or implicitly referred to in the OpenTelemetry spec

## Deno Module

The Deno module is available at https://deno.land/x/otel_common_api
