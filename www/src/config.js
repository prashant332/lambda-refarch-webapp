// You can obtain these values by running:
// aws cloudformation describe-stacks --stack-name <YOUR STACK NAME> --query "Stacks[0].Outputs[]"

const config = {
  "aws_user_pools_web_client_id": "43s1vpbrv6k66ruo4gmsuo1uei",     // CognitoClientID
  "api_base_url": "https://raf64a2s4d.execute-api.ap-south-1.amazonaws.com/prod",                                     // TodoFunctionApi
  "cognito_hosted_domain": "mytodoappdemo-todo-app.auth.ap-south-1.amazoncognito.com",                   // CognitoDomainName
  "redirect_url": "https://master.d28olwesdgn0t2.amplifyapp.com"                                      // AmplifyURL
};

export default config;
