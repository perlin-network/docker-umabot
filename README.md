# UMA Bots on AWS Fargate

### Introduction

This repo contains the CI/CD configuration for Pulumi that helps deploy UMA's liquidation and disputer bots to AWS Fargate which allows running docker containers without having to manage servers or clusters. 

### Dependencies

- aws-cli (https://docs.aws.amazon.com/cli/index.html)
- pulumi (https://www.pulumi.com/docs/)

### Configuration

You will need to supply parameter values according to your environment at `Pulumi.dev.yaml` file.

| Key               | Value                             | Required |
|-------------------|-----------------------------------|----------|
| empAddress        | EMP contract address              | Yes      |
| infuraKey         | Infura API key                    | Yes      |
| privateKey        | Ethereum private key for your bot | Yes      |
| pageDutyAPI       | PageDuty API key (Notification)   | No       |
| pageDutyServiceID | PageDuty Service ID (Notification)| No       |
| pageDutyFromEmail | PageDuty Email (Notification)     | No       |

### Deployment

Assuming you've already setup the credential of AWS CLI & Pulumi, once ready you can setup liquidation and disputer bots on your AWS account by the following scripts:

```
pulumi up
```

To get a log stream from the container, use (Or checkout on Cloudwatch)

```
pulumi logs --follow
```


