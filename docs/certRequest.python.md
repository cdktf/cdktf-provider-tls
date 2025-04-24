# `certRequest` Submodule <a name="`certRequest` Submodule" id="@cdktf/provider-tls.certRequest"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CertRequest <a name="CertRequest" id="@cdktf/provider-tls.certRequest.CertRequest"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/tls/4.1.0/docs/resources/cert_request tls_cert_request}.

#### Initializers <a name="Initializers" id="@cdktf/provider-tls.certRequest.CertRequest.Initializer"></a>

```python
from cdktf_cdktf_provider_tls import cert_request

certRequest.CertRequest(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  private_key_pem: str,
  dns_names: typing.List[str] = None,
  ip_addresses: typing.List[str] = None,
  subject: typing.Union[IResolvable, typing.List[CertRequestSubject]] = None,
  uris: typing.List[str] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tls.certRequest.CertRequest.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-tls.certRequest.CertRequest.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-tls.certRequest.CertRequest.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.certRequest.CertRequest.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.certRequest.CertRequest.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.certRequest.CertRequest.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.certRequest.CertRequest.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.certRequest.CertRequest.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.certRequest.CertRequest.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.certRequest.CertRequest.Initializer.parameter.privateKeyPem">private_key_pem</a></code> | <code>str</code> | Private key in [PEM (RFC 1421)](https://datatracker.ietf.org/doc/html/rfc1421) format, that the certificate will belong to. This can be read from a separate file using the [`file`](https://www.terraform.io/language/functions/file) interpolation function. |
| <code><a href="#@cdktf/provider-tls.certRequest.CertRequest.Initializer.parameter.dnsNames">dns_names</a></code> | <code>typing.List[str]</code> | List of DNS names for which a certificate is being requested (i.e. certificate subjects). |
| <code><a href="#@cdktf/provider-tls.certRequest.CertRequest.Initializer.parameter.ipAddresses">ip_addresses</a></code> | <code>typing.List[str]</code> | List of IP addresses for which a certificate is being requested (i.e. certificate subjects). |
| <code><a href="#@cdktf/provider-tls.certRequest.CertRequest.Initializer.parameter.subject">subject</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-tls.certRequest.CertRequestSubject">CertRequestSubject</a>]]</code> | subject block. |
| <code><a href="#@cdktf/provider-tls.certRequest.CertRequest.Initializer.parameter.uris">uris</a></code> | <code>typing.List[str]</code> | List of URIs for which a certificate is being requested (i.e. certificate subjects). |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-tls.certRequest.CertRequest.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-tls.certRequest.CertRequest.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-tls.certRequest.CertRequest.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-tls.certRequest.CertRequest.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-tls.certRequest.CertRequest.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-tls.certRequest.CertRequest.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-tls.certRequest.CertRequest.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-tls.certRequest.CertRequest.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-tls.certRequest.CertRequest.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `private_key_pem`<sup>Required</sup> <a name="private_key_pem" id="@cdktf/provider-tls.certRequest.CertRequest.Initializer.parameter.privateKeyPem"></a>

- *Type:* str

Private key in [PEM (RFC 1421)](https://datatracker.ietf.org/doc/html/rfc1421) format, that the certificate will belong to. This can be read from a separate file using the [`file`](https://www.terraform.io/language/functions/file) interpolation function.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tls/4.1.0/docs/resources/cert_request#private_key_pem CertRequest#private_key_pem}

---

##### `dns_names`<sup>Optional</sup> <a name="dns_names" id="@cdktf/provider-tls.certRequest.CertRequest.Initializer.parameter.dnsNames"></a>

- *Type:* typing.List[str]

List of DNS names for which a certificate is being requested (i.e. certificate subjects).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tls/4.1.0/docs/resources/cert_request#dns_names CertRequest#dns_names}

---

##### `ip_addresses`<sup>Optional</sup> <a name="ip_addresses" id="@cdktf/provider-tls.certRequest.CertRequest.Initializer.parameter.ipAddresses"></a>

- *Type:* typing.List[str]

List of IP addresses for which a certificate is being requested (i.e. certificate subjects).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tls/4.1.0/docs/resources/cert_request#ip_addresses CertRequest#ip_addresses}

---

##### `subject`<sup>Optional</sup> <a name="subject" id="@cdktf/provider-tls.certRequest.CertRequest.Initializer.parameter.subject"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-tls.certRequest.CertRequestSubject">CertRequestSubject</a>]]

subject block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tls/4.1.0/docs/resources/cert_request#subject CertRequest#subject}

---

##### `uris`<sup>Optional</sup> <a name="uris" id="@cdktf/provider-tls.certRequest.CertRequest.Initializer.parameter.uris"></a>

- *Type:* typing.List[str]

List of URIs for which a certificate is being requested (i.e. certificate subjects).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tls/4.1.0/docs/resources/cert_request#uris CertRequest#uris}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-tls.certRequest.CertRequest.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-tls.certRequest.CertRequest.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.certRequest.CertRequest.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-tls.certRequest.CertRequest.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-tls.certRequest.CertRequest.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.certRequest.CertRequest.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.certRequest.CertRequest.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-tls.certRequest.CertRequest.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-tls.certRequest.CertRequest.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.certRequest.CertRequest.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.certRequest.CertRequest.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.certRequest.CertRequest.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.certRequest.CertRequest.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.certRequest.CertRequest.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.certRequest.CertRequest.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.certRequest.CertRequest.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.certRequest.CertRequest.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.certRequest.CertRequest.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.certRequest.CertRequest.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.certRequest.CertRequest.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.certRequest.CertRequest.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-tls.certRequest.CertRequest.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-tls.certRequest.CertRequest.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-tls.certRequest.CertRequest.putSubject">put_subject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.certRequest.CertRequest.resetDnsNames">reset_dns_names</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.certRequest.CertRequest.resetIpAddresses">reset_ip_addresses</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.certRequest.CertRequest.resetSubject">reset_subject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.certRequest.CertRequest.resetUris">reset_uris</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-tls.certRequest.CertRequest.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-tls.certRequest.CertRequest.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-tls.certRequest.CertRequest.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-tls.certRequest.CertRequest.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-tls.certRequest.CertRequest.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-tls.certRequest.CertRequest.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-tls.certRequest.CertRequest.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-tls.certRequest.CertRequest.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-tls.certRequest.CertRequest.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-tls.certRequest.CertRequest.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-tls.certRequest.CertRequest.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-tls.certRequest.CertRequest.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-tls.certRequest.CertRequest.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-tls.certRequest.CertRequest.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-tls.certRequest.CertRequest.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-tls.certRequest.CertRequest.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-tls.certRequest.CertRequest.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-tls.certRequest.CertRequest.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-tls.certRequest.CertRequest.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-tls.certRequest.CertRequest.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-tls.certRequest.CertRequest.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-tls.certRequest.CertRequest.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-tls.certRequest.CertRequest.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-tls.certRequest.CertRequest.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-tls.certRequest.CertRequest.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-tls.certRequest.CertRequest.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-tls.certRequest.CertRequest.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-tls.certRequest.CertRequest.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-tls.certRequest.CertRequest.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-tls.certRequest.CertRequest.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-tls.certRequest.CertRequest.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-tls.certRequest.CertRequest.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-tls.certRequest.CertRequest.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-tls.certRequest.CertRequest.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-tls.certRequest.CertRequest.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-tls.certRequest.CertRequest.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-tls.certRequest.CertRequest.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-tls.certRequest.CertRequest.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-tls.certRequest.CertRequest.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-tls.certRequest.CertRequest.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-tls.certRequest.CertRequest.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-tls.certRequest.CertRequest.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-tls.certRequest.CertRequest.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_subject` <a name="put_subject" id="@cdktf/provider-tls.certRequest.CertRequest.putSubject"></a>

```python
def put_subject(
  value: typing.Union[IResolvable, typing.List[CertRequestSubject]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-tls.certRequest.CertRequest.putSubject.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-tls.certRequest.CertRequestSubject">CertRequestSubject</a>]]

---

##### `reset_dns_names` <a name="reset_dns_names" id="@cdktf/provider-tls.certRequest.CertRequest.resetDnsNames"></a>

```python
def reset_dns_names() -> None
```

##### `reset_ip_addresses` <a name="reset_ip_addresses" id="@cdktf/provider-tls.certRequest.CertRequest.resetIpAddresses"></a>

```python
def reset_ip_addresses() -> None
```

##### `reset_subject` <a name="reset_subject" id="@cdktf/provider-tls.certRequest.CertRequest.resetSubject"></a>

```python
def reset_subject() -> None
```

##### `reset_uris` <a name="reset_uris" id="@cdktf/provider-tls.certRequest.CertRequest.resetUris"></a>

```python
def reset_uris() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-tls.certRequest.CertRequest.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-tls.certRequest.CertRequest.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.certRequest.CertRequest.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.certRequest.CertRequest.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a CertRequest resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-tls.certRequest.CertRequest.isConstruct"></a>

```python
from cdktf_cdktf_provider_tls import cert_request

certRequest.CertRequest.is_construct(
  x: typing.Any
)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-tls.certRequest.CertRequest.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-tls.certRequest.CertRequest.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_tls import cert_request

certRequest.CertRequest.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-tls.certRequest.CertRequest.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-tls.certRequest.CertRequest.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_tls import cert_request

certRequest.CertRequest.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-tls.certRequest.CertRequest.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-tls.certRequest.CertRequest.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_tls import cert_request

certRequest.CertRequest.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a CertRequest resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-tls.certRequest.CertRequest.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-tls.certRequest.CertRequest.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the CertRequest to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-tls.certRequest.CertRequest.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing CertRequest that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/tls/4.1.0/docs/resources/cert_request#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-tls.certRequest.CertRequest.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the CertRequest to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tls.certRequest.CertRequest.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-tls.certRequest.CertRequest.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.certRequest.CertRequest.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.certRequest.CertRequest.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.certRequest.CertRequest.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.certRequest.CertRequest.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.certRequest.CertRequest.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.certRequest.CertRequest.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.certRequest.CertRequest.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.certRequest.CertRequest.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.certRequest.CertRequest.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.certRequest.CertRequest.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.certRequest.CertRequest.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.certRequest.CertRequest.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.certRequest.CertRequest.property.certRequestPem">cert_request_pem</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.certRequest.CertRequest.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.certRequest.CertRequest.property.keyAlgorithm">key_algorithm</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.certRequest.CertRequest.property.subject">subject</a></code> | <code><a href="#@cdktf/provider-tls.certRequest.CertRequestSubjectList">CertRequestSubjectList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.certRequest.CertRequest.property.dnsNamesInput">dns_names_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.certRequest.CertRequest.property.ipAddressesInput">ip_addresses_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.certRequest.CertRequest.property.privateKeyPemInput">private_key_pem_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.certRequest.CertRequest.property.subjectInput">subject_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-tls.certRequest.CertRequestSubject">CertRequestSubject</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.certRequest.CertRequest.property.urisInput">uris_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.certRequest.CertRequest.property.dnsNames">dns_names</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.certRequest.CertRequest.property.ipAddresses">ip_addresses</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.certRequest.CertRequest.property.privateKeyPem">private_key_pem</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.certRequest.CertRequest.property.uris">uris</a></code> | <code>typing.List[str]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-tls.certRequest.CertRequest.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-tls.certRequest.CertRequest.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-tls.certRequest.CertRequest.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-tls.certRequest.CertRequest.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-tls.certRequest.CertRequest.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-tls.certRequest.CertRequest.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-tls.certRequest.CertRequest.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-tls.certRequest.CertRequest.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-tls.certRequest.CertRequest.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-tls.certRequest.CertRequest.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-tls.certRequest.CertRequest.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-tls.certRequest.CertRequest.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-tls.certRequest.CertRequest.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-tls.certRequest.CertRequest.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `cert_request_pem`<sup>Required</sup> <a name="cert_request_pem" id="@cdktf/provider-tls.certRequest.CertRequest.property.certRequestPem"></a>

```python
cert_request_pem: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-tls.certRequest.CertRequest.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `key_algorithm`<sup>Required</sup> <a name="key_algorithm" id="@cdktf/provider-tls.certRequest.CertRequest.property.keyAlgorithm"></a>

```python
key_algorithm: str
```

- *Type:* str

---

##### `subject`<sup>Required</sup> <a name="subject" id="@cdktf/provider-tls.certRequest.CertRequest.property.subject"></a>

```python
subject: CertRequestSubjectList
```

- *Type:* <a href="#@cdktf/provider-tls.certRequest.CertRequestSubjectList">CertRequestSubjectList</a>

---

##### `dns_names_input`<sup>Optional</sup> <a name="dns_names_input" id="@cdktf/provider-tls.certRequest.CertRequest.property.dnsNamesInput"></a>

```python
dns_names_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `ip_addresses_input`<sup>Optional</sup> <a name="ip_addresses_input" id="@cdktf/provider-tls.certRequest.CertRequest.property.ipAddressesInput"></a>

```python
ip_addresses_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `private_key_pem_input`<sup>Optional</sup> <a name="private_key_pem_input" id="@cdktf/provider-tls.certRequest.CertRequest.property.privateKeyPemInput"></a>

```python
private_key_pem_input: str
```

- *Type:* str

---

##### `subject_input`<sup>Optional</sup> <a name="subject_input" id="@cdktf/provider-tls.certRequest.CertRequest.property.subjectInput"></a>

```python
subject_input: typing.Union[IResolvable, typing.List[CertRequestSubject]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-tls.certRequest.CertRequestSubject">CertRequestSubject</a>]]

---

##### `uris_input`<sup>Optional</sup> <a name="uris_input" id="@cdktf/provider-tls.certRequest.CertRequest.property.urisInput"></a>

```python
uris_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `dns_names`<sup>Required</sup> <a name="dns_names" id="@cdktf/provider-tls.certRequest.CertRequest.property.dnsNames"></a>

```python
dns_names: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `ip_addresses`<sup>Required</sup> <a name="ip_addresses" id="@cdktf/provider-tls.certRequest.CertRequest.property.ipAddresses"></a>

```python
ip_addresses: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `private_key_pem`<sup>Required</sup> <a name="private_key_pem" id="@cdktf/provider-tls.certRequest.CertRequest.property.privateKeyPem"></a>

```python
private_key_pem: str
```

- *Type:* str

---

##### `uris`<sup>Required</sup> <a name="uris" id="@cdktf/provider-tls.certRequest.CertRequest.property.uris"></a>

```python
uris: typing.List[str]
```

- *Type:* typing.List[str]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tls.certRequest.CertRequest.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-tls.certRequest.CertRequest.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### CertRequestConfig <a name="CertRequestConfig" id="@cdktf/provider-tls.certRequest.CertRequestConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-tls.certRequest.CertRequestConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_tls import cert_request

certRequest.CertRequestConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  private_key_pem: str,
  dns_names: typing.List[str] = None,
  ip_addresses: typing.List[str] = None,
  subject: typing.Union[IResolvable, typing.List[CertRequestSubject]] = None,
  uris: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tls.certRequest.CertRequestConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.certRequest.CertRequestConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.certRequest.CertRequestConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.certRequest.CertRequestConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.certRequest.CertRequestConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.certRequest.CertRequestConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.certRequest.CertRequestConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.certRequest.CertRequestConfig.property.privateKeyPem">private_key_pem</a></code> | <code>str</code> | Private key in [PEM (RFC 1421)](https://datatracker.ietf.org/doc/html/rfc1421) format, that the certificate will belong to. This can be read from a separate file using the [`file`](https://www.terraform.io/language/functions/file) interpolation function. |
| <code><a href="#@cdktf/provider-tls.certRequest.CertRequestConfig.property.dnsNames">dns_names</a></code> | <code>typing.List[str]</code> | List of DNS names for which a certificate is being requested (i.e. certificate subjects). |
| <code><a href="#@cdktf/provider-tls.certRequest.CertRequestConfig.property.ipAddresses">ip_addresses</a></code> | <code>typing.List[str]</code> | List of IP addresses for which a certificate is being requested (i.e. certificate subjects). |
| <code><a href="#@cdktf/provider-tls.certRequest.CertRequestConfig.property.subject">subject</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-tls.certRequest.CertRequestSubject">CertRequestSubject</a>]]</code> | subject block. |
| <code><a href="#@cdktf/provider-tls.certRequest.CertRequestConfig.property.uris">uris</a></code> | <code>typing.List[str]</code> | List of URIs for which a certificate is being requested (i.e. certificate subjects). |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-tls.certRequest.CertRequestConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-tls.certRequest.CertRequestConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-tls.certRequest.CertRequestConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-tls.certRequest.CertRequestConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-tls.certRequest.CertRequestConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-tls.certRequest.CertRequestConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-tls.certRequest.CertRequestConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `private_key_pem`<sup>Required</sup> <a name="private_key_pem" id="@cdktf/provider-tls.certRequest.CertRequestConfig.property.privateKeyPem"></a>

```python
private_key_pem: str
```

- *Type:* str

Private key in [PEM (RFC 1421)](https://datatracker.ietf.org/doc/html/rfc1421) format, that the certificate will belong to. This can be read from a separate file using the [`file`](https://www.terraform.io/language/functions/file) interpolation function.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tls/4.1.0/docs/resources/cert_request#private_key_pem CertRequest#private_key_pem}

---

##### `dns_names`<sup>Optional</sup> <a name="dns_names" id="@cdktf/provider-tls.certRequest.CertRequestConfig.property.dnsNames"></a>

```python
dns_names: typing.List[str]
```

- *Type:* typing.List[str]

List of DNS names for which a certificate is being requested (i.e. certificate subjects).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tls/4.1.0/docs/resources/cert_request#dns_names CertRequest#dns_names}

---

##### `ip_addresses`<sup>Optional</sup> <a name="ip_addresses" id="@cdktf/provider-tls.certRequest.CertRequestConfig.property.ipAddresses"></a>

```python
ip_addresses: typing.List[str]
```

- *Type:* typing.List[str]

List of IP addresses for which a certificate is being requested (i.e. certificate subjects).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tls/4.1.0/docs/resources/cert_request#ip_addresses CertRequest#ip_addresses}

---

##### `subject`<sup>Optional</sup> <a name="subject" id="@cdktf/provider-tls.certRequest.CertRequestConfig.property.subject"></a>

```python
subject: typing.Union[IResolvable, typing.List[CertRequestSubject]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-tls.certRequest.CertRequestSubject">CertRequestSubject</a>]]

subject block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tls/4.1.0/docs/resources/cert_request#subject CertRequest#subject}

---

##### `uris`<sup>Optional</sup> <a name="uris" id="@cdktf/provider-tls.certRequest.CertRequestConfig.property.uris"></a>

```python
uris: typing.List[str]
```

- *Type:* typing.List[str]

List of URIs for which a certificate is being requested (i.e. certificate subjects).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tls/4.1.0/docs/resources/cert_request#uris CertRequest#uris}

---

### CertRequestSubject <a name="CertRequestSubject" id="@cdktf/provider-tls.certRequest.CertRequestSubject"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-tls.certRequest.CertRequestSubject.Initializer"></a>

```python
from cdktf_cdktf_provider_tls import cert_request

certRequest.CertRequestSubject(
  common_name: str = None,
  country: str = None,
  email_address: str = None,
  locality: str = None,
  organization: str = None,
  organizational_unit: str = None,
  postal_code: str = None,
  province: str = None,
  serial_number: str = None,
  street_address: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tls.certRequest.CertRequestSubject.property.commonName">common_name</a></code> | <code>str</code> | Distinguished name: `CN`. |
| <code><a href="#@cdktf/provider-tls.certRequest.CertRequestSubject.property.country">country</a></code> | <code>str</code> | Distinguished name: `C`. |
| <code><a href="#@cdktf/provider-tls.certRequest.CertRequestSubject.property.emailAddress">email_address</a></code> | <code>str</code> | ASN.1 Object Identifier (OID): `1.2.840.113549.1.9.1`. |
| <code><a href="#@cdktf/provider-tls.certRequest.CertRequestSubject.property.locality">locality</a></code> | <code>str</code> | Distinguished name: `L`. |
| <code><a href="#@cdktf/provider-tls.certRequest.CertRequestSubject.property.organization">organization</a></code> | <code>str</code> | Distinguished name: `O`. |
| <code><a href="#@cdktf/provider-tls.certRequest.CertRequestSubject.property.organizationalUnit">organizational_unit</a></code> | <code>str</code> | Distinguished name: `OU`. |
| <code><a href="#@cdktf/provider-tls.certRequest.CertRequestSubject.property.postalCode">postal_code</a></code> | <code>str</code> | Distinguished name: `PC`. |
| <code><a href="#@cdktf/provider-tls.certRequest.CertRequestSubject.property.province">province</a></code> | <code>str</code> | Distinguished name: `ST`. |
| <code><a href="#@cdktf/provider-tls.certRequest.CertRequestSubject.property.serialNumber">serial_number</a></code> | <code>str</code> | Distinguished name: `SERIALNUMBER`. |
| <code><a href="#@cdktf/provider-tls.certRequest.CertRequestSubject.property.streetAddress">street_address</a></code> | <code>typing.List[str]</code> | Distinguished name: `STREET`. |

---

##### `common_name`<sup>Optional</sup> <a name="common_name" id="@cdktf/provider-tls.certRequest.CertRequestSubject.property.commonName"></a>

```python
common_name: str
```

- *Type:* str

Distinguished name: `CN`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tls/4.1.0/docs/resources/cert_request#common_name CertRequest#common_name}

---

##### `country`<sup>Optional</sup> <a name="country" id="@cdktf/provider-tls.certRequest.CertRequestSubject.property.country"></a>

```python
country: str
```

- *Type:* str

Distinguished name: `C`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tls/4.1.0/docs/resources/cert_request#country CertRequest#country}

---

##### `email_address`<sup>Optional</sup> <a name="email_address" id="@cdktf/provider-tls.certRequest.CertRequestSubject.property.emailAddress"></a>

```python
email_address: str
```

- *Type:* str

ASN.1 Object Identifier (OID): `1.2.840.113549.1.9.1`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tls/4.1.0/docs/resources/cert_request#email_address CertRequest#email_address}

---

##### `locality`<sup>Optional</sup> <a name="locality" id="@cdktf/provider-tls.certRequest.CertRequestSubject.property.locality"></a>

```python
locality: str
```

- *Type:* str

Distinguished name: `L`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tls/4.1.0/docs/resources/cert_request#locality CertRequest#locality}

---

##### `organization`<sup>Optional</sup> <a name="organization" id="@cdktf/provider-tls.certRequest.CertRequestSubject.property.organization"></a>

```python
organization: str
```

- *Type:* str

Distinguished name: `O`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tls/4.1.0/docs/resources/cert_request#organization CertRequest#organization}

---

##### `organizational_unit`<sup>Optional</sup> <a name="organizational_unit" id="@cdktf/provider-tls.certRequest.CertRequestSubject.property.organizationalUnit"></a>

```python
organizational_unit: str
```

- *Type:* str

Distinguished name: `OU`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tls/4.1.0/docs/resources/cert_request#organizational_unit CertRequest#organizational_unit}

---

##### `postal_code`<sup>Optional</sup> <a name="postal_code" id="@cdktf/provider-tls.certRequest.CertRequestSubject.property.postalCode"></a>

```python
postal_code: str
```

- *Type:* str

Distinguished name: `PC`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tls/4.1.0/docs/resources/cert_request#postal_code CertRequest#postal_code}

---

##### `province`<sup>Optional</sup> <a name="province" id="@cdktf/provider-tls.certRequest.CertRequestSubject.property.province"></a>

```python
province: str
```

- *Type:* str

Distinguished name: `ST`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tls/4.1.0/docs/resources/cert_request#province CertRequest#province}

---

##### `serial_number`<sup>Optional</sup> <a name="serial_number" id="@cdktf/provider-tls.certRequest.CertRequestSubject.property.serialNumber"></a>

```python
serial_number: str
```

- *Type:* str

Distinguished name: `SERIALNUMBER`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tls/4.1.0/docs/resources/cert_request#serial_number CertRequest#serial_number}

---

##### `street_address`<sup>Optional</sup> <a name="street_address" id="@cdktf/provider-tls.certRequest.CertRequestSubject.property.streetAddress"></a>

```python
street_address: typing.List[str]
```

- *Type:* typing.List[str]

Distinguished name: `STREET`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tls/4.1.0/docs/resources/cert_request#street_address CertRequest#street_address}

---

## Classes <a name="Classes" id="Classes"></a>

### CertRequestSubjectList <a name="CertRequestSubjectList" id="@cdktf/provider-tls.certRequest.CertRequestSubjectList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-tls.certRequest.CertRequestSubjectList.Initializer"></a>

```python
from cdktf_cdktf_provider_tls import cert_request

certRequest.CertRequestSubjectList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tls.certRequest.CertRequestSubjectList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-tls.certRequest.CertRequestSubjectList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-tls.certRequest.CertRequestSubjectList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-tls.certRequest.CertRequestSubjectList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-tls.certRequest.CertRequestSubjectList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-tls.certRequest.CertRequestSubjectList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-tls.certRequest.CertRequestSubjectList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-tls.certRequest.CertRequestSubjectList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.certRequest.CertRequestSubjectList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-tls.certRequest.CertRequestSubjectList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-tls.certRequest.CertRequestSubjectList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-tls.certRequest.CertRequestSubjectList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-tls.certRequest.CertRequestSubjectList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-tls.certRequest.CertRequestSubjectList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-tls.certRequest.CertRequestSubjectList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-tls.certRequest.CertRequestSubjectList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-tls.certRequest.CertRequestSubjectList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-tls.certRequest.CertRequestSubjectList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> CertRequestSubjectOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-tls.certRequest.CertRequestSubjectList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tls.certRequest.CertRequestSubjectList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-tls.certRequest.CertRequestSubjectList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.certRequest.CertRequestSubjectList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-tls.certRequest.CertRequestSubject">CertRequestSubject</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-tls.certRequest.CertRequestSubjectList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-tls.certRequest.CertRequestSubjectList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-tls.certRequest.CertRequestSubjectList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[CertRequestSubject]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-tls.certRequest.CertRequestSubject">CertRequestSubject</a>]]

---


### CertRequestSubjectOutputReference <a name="CertRequestSubjectOutputReference" id="@cdktf/provider-tls.certRequest.CertRequestSubjectOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-tls.certRequest.CertRequestSubjectOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_tls import cert_request

certRequest.CertRequestSubjectOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tls.certRequest.CertRequestSubjectOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-tls.certRequest.CertRequestSubjectOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-tls.certRequest.CertRequestSubjectOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-tls.certRequest.CertRequestSubjectOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-tls.certRequest.CertRequestSubjectOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-tls.certRequest.CertRequestSubjectOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-tls.certRequest.CertRequestSubjectOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-tls.certRequest.CertRequestSubjectOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-tls.certRequest.CertRequestSubjectOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.certRequest.CertRequestSubjectOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.certRequest.CertRequestSubjectOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.certRequest.CertRequestSubjectOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.certRequest.CertRequestSubjectOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.certRequest.CertRequestSubjectOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.certRequest.CertRequestSubjectOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.certRequest.CertRequestSubjectOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.certRequest.CertRequestSubjectOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.certRequest.CertRequestSubjectOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.certRequest.CertRequestSubjectOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.certRequest.CertRequestSubjectOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-tls.certRequest.CertRequestSubjectOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-tls.certRequest.CertRequestSubjectOutputReference.resetCommonName">reset_common_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.certRequest.CertRequestSubjectOutputReference.resetCountry">reset_country</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.certRequest.CertRequestSubjectOutputReference.resetEmailAddress">reset_email_address</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.certRequest.CertRequestSubjectOutputReference.resetLocality">reset_locality</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.certRequest.CertRequestSubjectOutputReference.resetOrganization">reset_organization</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.certRequest.CertRequestSubjectOutputReference.resetOrganizationalUnit">reset_organizational_unit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.certRequest.CertRequestSubjectOutputReference.resetPostalCode">reset_postal_code</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.certRequest.CertRequestSubjectOutputReference.resetProvince">reset_province</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.certRequest.CertRequestSubjectOutputReference.resetSerialNumber">reset_serial_number</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.certRequest.CertRequestSubjectOutputReference.resetStreetAddress">reset_street_address</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-tls.certRequest.CertRequestSubjectOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-tls.certRequest.CertRequestSubjectOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-tls.certRequest.CertRequestSubjectOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-tls.certRequest.CertRequestSubjectOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-tls.certRequest.CertRequestSubjectOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-tls.certRequest.CertRequestSubjectOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-tls.certRequest.CertRequestSubjectOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-tls.certRequest.CertRequestSubjectOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-tls.certRequest.CertRequestSubjectOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-tls.certRequest.CertRequestSubjectOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-tls.certRequest.CertRequestSubjectOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-tls.certRequest.CertRequestSubjectOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-tls.certRequest.CertRequestSubjectOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-tls.certRequest.CertRequestSubjectOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-tls.certRequest.CertRequestSubjectOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-tls.certRequest.CertRequestSubjectOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-tls.certRequest.CertRequestSubjectOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-tls.certRequest.CertRequestSubjectOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-tls.certRequest.CertRequestSubjectOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-tls.certRequest.CertRequestSubjectOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-tls.certRequest.CertRequestSubjectOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-tls.certRequest.CertRequestSubjectOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-tls.certRequest.CertRequestSubjectOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-tls.certRequest.CertRequestSubjectOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_common_name` <a name="reset_common_name" id="@cdktf/provider-tls.certRequest.CertRequestSubjectOutputReference.resetCommonName"></a>

```python
def reset_common_name() -> None
```

##### `reset_country` <a name="reset_country" id="@cdktf/provider-tls.certRequest.CertRequestSubjectOutputReference.resetCountry"></a>

```python
def reset_country() -> None
```

##### `reset_email_address` <a name="reset_email_address" id="@cdktf/provider-tls.certRequest.CertRequestSubjectOutputReference.resetEmailAddress"></a>

```python
def reset_email_address() -> None
```

##### `reset_locality` <a name="reset_locality" id="@cdktf/provider-tls.certRequest.CertRequestSubjectOutputReference.resetLocality"></a>

```python
def reset_locality() -> None
```

##### `reset_organization` <a name="reset_organization" id="@cdktf/provider-tls.certRequest.CertRequestSubjectOutputReference.resetOrganization"></a>

```python
def reset_organization() -> None
```

##### `reset_organizational_unit` <a name="reset_organizational_unit" id="@cdktf/provider-tls.certRequest.CertRequestSubjectOutputReference.resetOrganizationalUnit"></a>

```python
def reset_organizational_unit() -> None
```

##### `reset_postal_code` <a name="reset_postal_code" id="@cdktf/provider-tls.certRequest.CertRequestSubjectOutputReference.resetPostalCode"></a>

```python
def reset_postal_code() -> None
```

##### `reset_province` <a name="reset_province" id="@cdktf/provider-tls.certRequest.CertRequestSubjectOutputReference.resetProvince"></a>

```python
def reset_province() -> None
```

##### `reset_serial_number` <a name="reset_serial_number" id="@cdktf/provider-tls.certRequest.CertRequestSubjectOutputReference.resetSerialNumber"></a>

```python
def reset_serial_number() -> None
```

##### `reset_street_address` <a name="reset_street_address" id="@cdktf/provider-tls.certRequest.CertRequestSubjectOutputReference.resetStreetAddress"></a>

```python
def reset_street_address() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tls.certRequest.CertRequestSubjectOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-tls.certRequest.CertRequestSubjectOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.certRequest.CertRequestSubjectOutputReference.property.commonNameInput">common_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.certRequest.CertRequestSubjectOutputReference.property.countryInput">country_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.certRequest.CertRequestSubjectOutputReference.property.emailAddressInput">email_address_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.certRequest.CertRequestSubjectOutputReference.property.localityInput">locality_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.certRequest.CertRequestSubjectOutputReference.property.organizationalUnitInput">organizational_unit_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.certRequest.CertRequestSubjectOutputReference.property.organizationInput">organization_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.certRequest.CertRequestSubjectOutputReference.property.postalCodeInput">postal_code_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.certRequest.CertRequestSubjectOutputReference.property.provinceInput">province_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.certRequest.CertRequestSubjectOutputReference.property.serialNumberInput">serial_number_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.certRequest.CertRequestSubjectOutputReference.property.streetAddressInput">street_address_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.certRequest.CertRequestSubjectOutputReference.property.commonName">common_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.certRequest.CertRequestSubjectOutputReference.property.country">country</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.certRequest.CertRequestSubjectOutputReference.property.emailAddress">email_address</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.certRequest.CertRequestSubjectOutputReference.property.locality">locality</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.certRequest.CertRequestSubjectOutputReference.property.organization">organization</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.certRequest.CertRequestSubjectOutputReference.property.organizationalUnit">organizational_unit</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.certRequest.CertRequestSubjectOutputReference.property.postalCode">postal_code</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.certRequest.CertRequestSubjectOutputReference.property.province">province</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.certRequest.CertRequestSubjectOutputReference.property.serialNumber">serial_number</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.certRequest.CertRequestSubjectOutputReference.property.streetAddress">street_address</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.certRequest.CertRequestSubjectOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-tls.certRequest.CertRequestSubject">CertRequestSubject</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-tls.certRequest.CertRequestSubjectOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-tls.certRequest.CertRequestSubjectOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `common_name_input`<sup>Optional</sup> <a name="common_name_input" id="@cdktf/provider-tls.certRequest.CertRequestSubjectOutputReference.property.commonNameInput"></a>

```python
common_name_input: str
```

- *Type:* str

---

##### `country_input`<sup>Optional</sup> <a name="country_input" id="@cdktf/provider-tls.certRequest.CertRequestSubjectOutputReference.property.countryInput"></a>

```python
country_input: str
```

- *Type:* str

---

##### `email_address_input`<sup>Optional</sup> <a name="email_address_input" id="@cdktf/provider-tls.certRequest.CertRequestSubjectOutputReference.property.emailAddressInput"></a>

```python
email_address_input: str
```

- *Type:* str

---

##### `locality_input`<sup>Optional</sup> <a name="locality_input" id="@cdktf/provider-tls.certRequest.CertRequestSubjectOutputReference.property.localityInput"></a>

```python
locality_input: str
```

- *Type:* str

---

##### `organizational_unit_input`<sup>Optional</sup> <a name="organizational_unit_input" id="@cdktf/provider-tls.certRequest.CertRequestSubjectOutputReference.property.organizationalUnitInput"></a>

```python
organizational_unit_input: str
```

- *Type:* str

---

##### `organization_input`<sup>Optional</sup> <a name="organization_input" id="@cdktf/provider-tls.certRequest.CertRequestSubjectOutputReference.property.organizationInput"></a>

```python
organization_input: str
```

- *Type:* str

---

##### `postal_code_input`<sup>Optional</sup> <a name="postal_code_input" id="@cdktf/provider-tls.certRequest.CertRequestSubjectOutputReference.property.postalCodeInput"></a>

```python
postal_code_input: str
```

- *Type:* str

---

##### `province_input`<sup>Optional</sup> <a name="province_input" id="@cdktf/provider-tls.certRequest.CertRequestSubjectOutputReference.property.provinceInput"></a>

```python
province_input: str
```

- *Type:* str

---

##### `serial_number_input`<sup>Optional</sup> <a name="serial_number_input" id="@cdktf/provider-tls.certRequest.CertRequestSubjectOutputReference.property.serialNumberInput"></a>

```python
serial_number_input: str
```

- *Type:* str

---

##### `street_address_input`<sup>Optional</sup> <a name="street_address_input" id="@cdktf/provider-tls.certRequest.CertRequestSubjectOutputReference.property.streetAddressInput"></a>

```python
street_address_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `common_name`<sup>Required</sup> <a name="common_name" id="@cdktf/provider-tls.certRequest.CertRequestSubjectOutputReference.property.commonName"></a>

```python
common_name: str
```

- *Type:* str

---

##### `country`<sup>Required</sup> <a name="country" id="@cdktf/provider-tls.certRequest.CertRequestSubjectOutputReference.property.country"></a>

```python
country: str
```

- *Type:* str

---

##### `email_address`<sup>Required</sup> <a name="email_address" id="@cdktf/provider-tls.certRequest.CertRequestSubjectOutputReference.property.emailAddress"></a>

```python
email_address: str
```

- *Type:* str

---

##### `locality`<sup>Required</sup> <a name="locality" id="@cdktf/provider-tls.certRequest.CertRequestSubjectOutputReference.property.locality"></a>

```python
locality: str
```

- *Type:* str

---

##### `organization`<sup>Required</sup> <a name="organization" id="@cdktf/provider-tls.certRequest.CertRequestSubjectOutputReference.property.organization"></a>

```python
organization: str
```

- *Type:* str

---

##### `organizational_unit`<sup>Required</sup> <a name="organizational_unit" id="@cdktf/provider-tls.certRequest.CertRequestSubjectOutputReference.property.organizationalUnit"></a>

```python
organizational_unit: str
```

- *Type:* str

---

##### `postal_code`<sup>Required</sup> <a name="postal_code" id="@cdktf/provider-tls.certRequest.CertRequestSubjectOutputReference.property.postalCode"></a>

```python
postal_code: str
```

- *Type:* str

---

##### `province`<sup>Required</sup> <a name="province" id="@cdktf/provider-tls.certRequest.CertRequestSubjectOutputReference.property.province"></a>

```python
province: str
```

- *Type:* str

---

##### `serial_number`<sup>Required</sup> <a name="serial_number" id="@cdktf/provider-tls.certRequest.CertRequestSubjectOutputReference.property.serialNumber"></a>

```python
serial_number: str
```

- *Type:* str

---

##### `street_address`<sup>Required</sup> <a name="street_address" id="@cdktf/provider-tls.certRequest.CertRequestSubjectOutputReference.property.streetAddress"></a>

```python
street_address: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-tls.certRequest.CertRequestSubjectOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[CertRequestSubject, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-tls.certRequest.CertRequestSubject">CertRequestSubject</a>, cdktf.IResolvable]

---



