# `selfSignedCert` Submodule <a name="`selfSignedCert` Submodule" id="@cdktf/provider-tls.selfSignedCert"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SelfSignedCert <a name="SelfSignedCert" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCert"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/tls/4.0.5/docs/resources/self_signed_cert tls_self_signed_cert}.

#### Initializers <a name="Initializers" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCert.Initializer"></a>

```python
from cdktf_cdktf_provider_tls import self_signed_cert

selfSignedCert.SelfSignedCert(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  allowed_uses: typing.List[str],
  private_key_pem: str,
  validity_period_hours: typing.Union[int, float],
  dns_names: typing.List[str] = None,
  early_renewal_hours: typing.Union[int, float] = None,
  ip_addresses: typing.List[str] = None,
  is_ca_certificate: typing.Union[bool, IResolvable] = None,
  set_authority_key_id: typing.Union[bool, IResolvable] = None,
  set_subject_key_id: typing.Union[bool, IResolvable] = None,
  subject: typing.Union[IResolvable, typing.List[SelfSignedCertSubject]] = None,
  uris: typing.List[str] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCert.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCert.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCert.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCert.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCert.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCert.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCert.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCert.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCert.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCert.Initializer.parameter.allowedUses">allowed_uses</a></code> | <code>typing.List[str]</code> | List of key usages allowed for the issued certificate. |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCert.Initializer.parameter.privateKeyPem">private_key_pem</a></code> | <code>str</code> | Private key in [PEM (RFC 1421)](https://datatracker.ietf.org/doc/html/rfc1421) format, that the certificate will belong to. This can be read from a separate file using the [`file`](https://www.terraform.io/language/functions/file) interpolation function. |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCert.Initializer.parameter.validityPeriodHours">validity_period_hours</a></code> | <code>typing.Union[int, float]</code> | Number of hours, after initial issuing, that the certificate will remain valid for. |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCert.Initializer.parameter.dnsNames">dns_names</a></code> | <code>typing.List[str]</code> | List of DNS names for which a certificate is being requested (i.e. certificate subjects). |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCert.Initializer.parameter.earlyRenewalHours">early_renewal_hours</a></code> | <code>typing.Union[int, float]</code> | The resource will consider the certificate to have expired the given number of hours before its actual expiry time. |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCert.Initializer.parameter.ipAddresses">ip_addresses</a></code> | <code>typing.List[str]</code> | List of IP addresses for which a certificate is being requested (i.e. certificate subjects). |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCert.Initializer.parameter.isCaCertificate">is_ca_certificate</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Is the generated certificate representing a Certificate Authority (CA) (default: `false`). |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCert.Initializer.parameter.setAuthorityKeyId">set_authority_key_id</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Should the generated certificate include an [authority key identifier](https://datatracker.ietf.org/doc/html/rfc5280#section-4.2.1.1): for self-signed certificates this is the same value as the [subject key identifier](https://datatracker.ietf.org/doc/html/rfc5280#section-4.2.1.2) (default: `false`). |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCert.Initializer.parameter.setSubjectKeyId">set_subject_key_id</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Should the generated certificate include a [subject key identifier](https://datatracker.ietf.org/doc/html/rfc5280#section-4.2.1.2) (default: `false`). |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCert.Initializer.parameter.subject">subject</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCertSubject">SelfSignedCertSubject</a>]]</code> | subject block. |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCert.Initializer.parameter.uris">uris</a></code> | <code>typing.List[str]</code> | List of URIs for which a certificate is being requested (i.e. certificate subjects). |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCert.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCert.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCert.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCert.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCert.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCert.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCert.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCert.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCert.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `allowed_uses`<sup>Required</sup> <a name="allowed_uses" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCert.Initializer.parameter.allowedUses"></a>

- *Type:* typing.List[str]

List of key usages allowed for the issued certificate.

Values are defined in [RFC 5280](https://datatracker.ietf.org/doc/html/rfc5280) and combine flags defined by both [Key Usages](https://datatracker.ietf.org/doc/html/rfc5280#section-4.2.1.3) and [Extended Key Usages](https://datatracker.ietf.org/doc/html/rfc5280#section-4.2.1.12). Accepted values: `any_extended`, `cert_signing`, `client_auth`, `code_signing`, `content_commitment`, `crl_signing`, `data_encipherment`, `decipher_only`, `digital_signature`, `email_protection`, `encipher_only`, `ipsec_end_system`, `ipsec_tunnel`, `ipsec_user`, `key_agreement`, `key_encipherment`, `microsoft_commercial_code_signing`, `microsoft_kernel_code_signing`, `microsoft_server_gated_crypto`, `netscape_server_gated_crypto`, `ocsp_signing`, `server_auth`, `timestamping`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tls/4.0.5/docs/resources/self_signed_cert#allowed_uses SelfSignedCert#allowed_uses}

---

##### `private_key_pem`<sup>Required</sup> <a name="private_key_pem" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCert.Initializer.parameter.privateKeyPem"></a>

- *Type:* str

Private key in [PEM (RFC 1421)](https://datatracker.ietf.org/doc/html/rfc1421) format, that the certificate will belong to. This can be read from a separate file using the [`file`](https://www.terraform.io/language/functions/file) interpolation function.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tls/4.0.5/docs/resources/self_signed_cert#private_key_pem SelfSignedCert#private_key_pem}

---

##### `validity_period_hours`<sup>Required</sup> <a name="validity_period_hours" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCert.Initializer.parameter.validityPeriodHours"></a>

- *Type:* typing.Union[int, float]

Number of hours, after initial issuing, that the certificate will remain valid for.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tls/4.0.5/docs/resources/self_signed_cert#validity_period_hours SelfSignedCert#validity_period_hours}

---

##### `dns_names`<sup>Optional</sup> <a name="dns_names" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCert.Initializer.parameter.dnsNames"></a>

- *Type:* typing.List[str]

List of DNS names for which a certificate is being requested (i.e. certificate subjects).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tls/4.0.5/docs/resources/self_signed_cert#dns_names SelfSignedCert#dns_names}

---

##### `early_renewal_hours`<sup>Optional</sup> <a name="early_renewal_hours" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCert.Initializer.parameter.earlyRenewalHours"></a>

- *Type:* typing.Union[int, float]

The resource will consider the certificate to have expired the given number of hours before its actual expiry time.

This can be useful to deploy an updated certificate in advance of the expiration of the current certificate. However, the old certificate remains valid until its true expiration time, since this resource does not (and cannot) support certificate revocation. Also, this advance update can only be performed should the Terraform configuration be applied during the early renewal period. (default: `0`)

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tls/4.0.5/docs/resources/self_signed_cert#early_renewal_hours SelfSignedCert#early_renewal_hours}

---

##### `ip_addresses`<sup>Optional</sup> <a name="ip_addresses" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCert.Initializer.parameter.ipAddresses"></a>

- *Type:* typing.List[str]

List of IP addresses for which a certificate is being requested (i.e. certificate subjects).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tls/4.0.5/docs/resources/self_signed_cert#ip_addresses SelfSignedCert#ip_addresses}

---

##### `is_ca_certificate`<sup>Optional</sup> <a name="is_ca_certificate" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCert.Initializer.parameter.isCaCertificate"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Is the generated certificate representing a Certificate Authority (CA) (default: `false`).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tls/4.0.5/docs/resources/self_signed_cert#is_ca_certificate SelfSignedCert#is_ca_certificate}

---

##### `set_authority_key_id`<sup>Optional</sup> <a name="set_authority_key_id" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCert.Initializer.parameter.setAuthorityKeyId"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Should the generated certificate include an [authority key identifier](https://datatracker.ietf.org/doc/html/rfc5280#section-4.2.1.1): for self-signed certificates this is the same value as the [subject key identifier](https://datatracker.ietf.org/doc/html/rfc5280#section-4.2.1.2) (default: `false`).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tls/4.0.5/docs/resources/self_signed_cert#set_authority_key_id SelfSignedCert#set_authority_key_id}

---

##### `set_subject_key_id`<sup>Optional</sup> <a name="set_subject_key_id" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCert.Initializer.parameter.setSubjectKeyId"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Should the generated certificate include a [subject key identifier](https://datatracker.ietf.org/doc/html/rfc5280#section-4.2.1.2) (default: `false`).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tls/4.0.5/docs/resources/self_signed_cert#set_subject_key_id SelfSignedCert#set_subject_key_id}

---

##### `subject`<sup>Optional</sup> <a name="subject" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCert.Initializer.parameter.subject"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCertSubject">SelfSignedCertSubject</a>]]

subject block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tls/4.0.5/docs/resources/self_signed_cert#subject SelfSignedCert#subject}

---

##### `uris`<sup>Optional</sup> <a name="uris" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCert.Initializer.parameter.uris"></a>

- *Type:* typing.List[str]

List of URIs for which a certificate is being requested (i.e. certificate subjects).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tls/4.0.5/docs/resources/self_signed_cert#uris SelfSignedCert#uris}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCert.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCert.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCert.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCert.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCert.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCert.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCert.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCert.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCert.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCert.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCert.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCert.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCert.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCert.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCert.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCert.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCert.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCert.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCert.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCert.putSubject">put_subject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCert.resetDnsNames">reset_dns_names</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCert.resetEarlyRenewalHours">reset_early_renewal_hours</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCert.resetIpAddresses">reset_ip_addresses</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCert.resetIsCaCertificate">reset_is_ca_certificate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCert.resetSetAuthorityKeyId">reset_set_authority_key_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCert.resetSetSubjectKeyId">reset_set_subject_key_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCert.resetSubject">reset_subject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCert.resetUris">reset_uris</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCert.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCert.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCert.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCert.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCert.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCert.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCert.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCert.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCert.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCert.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCert.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCert.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCert.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCert.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCert.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCert.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCert.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCert.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCert.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCert.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCert.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCert.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCert.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCert.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCert.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCert.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCert.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCert.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCert.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `import_from` <a name="import_from" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCert.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCert.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCert.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCert.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCert.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_to` <a name="move_to" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCert.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCert.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCert.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `put_subject` <a name="put_subject" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCert.putSubject"></a>

```python
def put_subject(
  value: typing.Union[IResolvable, typing.List[SelfSignedCertSubject]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCert.putSubject.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCertSubject">SelfSignedCertSubject</a>]]

---

##### `reset_dns_names` <a name="reset_dns_names" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCert.resetDnsNames"></a>

```python
def reset_dns_names() -> None
```

##### `reset_early_renewal_hours` <a name="reset_early_renewal_hours" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCert.resetEarlyRenewalHours"></a>

```python
def reset_early_renewal_hours() -> None
```

##### `reset_ip_addresses` <a name="reset_ip_addresses" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCert.resetIpAddresses"></a>

```python
def reset_ip_addresses() -> None
```

##### `reset_is_ca_certificate` <a name="reset_is_ca_certificate" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCert.resetIsCaCertificate"></a>

```python
def reset_is_ca_certificate() -> None
```

##### `reset_set_authority_key_id` <a name="reset_set_authority_key_id" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCert.resetSetAuthorityKeyId"></a>

```python
def reset_set_authority_key_id() -> None
```

##### `reset_set_subject_key_id` <a name="reset_set_subject_key_id" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCert.resetSetSubjectKeyId"></a>

```python
def reset_set_subject_key_id() -> None
```

##### `reset_subject` <a name="reset_subject" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCert.resetSubject"></a>

```python
def reset_subject() -> None
```

##### `reset_uris` <a name="reset_uris" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCert.resetUris"></a>

```python
def reset_uris() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCert.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCert.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCert.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCert.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a SelfSignedCert resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCert.isConstruct"></a>

```python
from cdktf_cdktf_provider_tls import self_signed_cert

selfSignedCert.SelfSignedCert.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCert.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCert.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_tls import self_signed_cert

selfSignedCert.SelfSignedCert.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCert.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCert.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_tls import self_signed_cert

selfSignedCert.SelfSignedCert.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCert.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCert.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_tls import self_signed_cert

selfSignedCert.SelfSignedCert.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a SelfSignedCert resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCert.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCert.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the SelfSignedCert to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCert.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing SelfSignedCert that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/tls/4.0.5/docs/resources/self_signed_cert#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCert.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the SelfSignedCert to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCert.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCert.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCert.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCert.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCert.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCert.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCert.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCert.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCert.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCert.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCert.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCert.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCert.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCert.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCert.property.certPem">cert_pem</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCert.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCert.property.keyAlgorithm">key_algorithm</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCert.property.readyForRenewal">ready_for_renewal</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCert.property.subject">subject</a></code> | <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCertSubjectList">SelfSignedCertSubjectList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCert.property.validityEndTime">validity_end_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCert.property.validityStartTime">validity_start_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCert.property.allowedUsesInput">allowed_uses_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCert.property.dnsNamesInput">dns_names_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCert.property.earlyRenewalHoursInput">early_renewal_hours_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCert.property.ipAddressesInput">ip_addresses_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCert.property.isCaCertificateInput">is_ca_certificate_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCert.property.privateKeyPemInput">private_key_pem_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCert.property.setAuthorityKeyIdInput">set_authority_key_id_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCert.property.setSubjectKeyIdInput">set_subject_key_id_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCert.property.subjectInput">subject_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCertSubject">SelfSignedCertSubject</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCert.property.urisInput">uris_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCert.property.validityPeriodHoursInput">validity_period_hours_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCert.property.allowedUses">allowed_uses</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCert.property.dnsNames">dns_names</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCert.property.earlyRenewalHours">early_renewal_hours</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCert.property.ipAddresses">ip_addresses</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCert.property.isCaCertificate">is_ca_certificate</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCert.property.privateKeyPem">private_key_pem</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCert.property.setAuthorityKeyId">set_authority_key_id</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCert.property.setSubjectKeyId">set_subject_key_id</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCert.property.uris">uris</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCert.property.validityPeriodHours">validity_period_hours</a></code> | <code>typing.Union[int, float]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCert.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCert.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCert.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCert.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCert.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCert.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCert.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCert.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCert.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCert.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCert.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCert.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCert.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCert.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `cert_pem`<sup>Required</sup> <a name="cert_pem" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCert.property.certPem"></a>

```python
cert_pem: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCert.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `key_algorithm`<sup>Required</sup> <a name="key_algorithm" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCert.property.keyAlgorithm"></a>

```python
key_algorithm: str
```

- *Type:* str

---

##### `ready_for_renewal`<sup>Required</sup> <a name="ready_for_renewal" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCert.property.readyForRenewal"></a>

```python
ready_for_renewal: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `subject`<sup>Required</sup> <a name="subject" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCert.property.subject"></a>

```python
subject: SelfSignedCertSubjectList
```

- *Type:* <a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCertSubjectList">SelfSignedCertSubjectList</a>

---

##### `validity_end_time`<sup>Required</sup> <a name="validity_end_time" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCert.property.validityEndTime"></a>

```python
validity_end_time: str
```

- *Type:* str

---

##### `validity_start_time`<sup>Required</sup> <a name="validity_start_time" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCert.property.validityStartTime"></a>

```python
validity_start_time: str
```

- *Type:* str

---

##### `allowed_uses_input`<sup>Optional</sup> <a name="allowed_uses_input" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCert.property.allowedUsesInput"></a>

```python
allowed_uses_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `dns_names_input`<sup>Optional</sup> <a name="dns_names_input" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCert.property.dnsNamesInput"></a>

```python
dns_names_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `early_renewal_hours_input`<sup>Optional</sup> <a name="early_renewal_hours_input" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCert.property.earlyRenewalHoursInput"></a>

```python
early_renewal_hours_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `ip_addresses_input`<sup>Optional</sup> <a name="ip_addresses_input" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCert.property.ipAddressesInput"></a>

```python
ip_addresses_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `is_ca_certificate_input`<sup>Optional</sup> <a name="is_ca_certificate_input" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCert.property.isCaCertificateInput"></a>

```python
is_ca_certificate_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `private_key_pem_input`<sup>Optional</sup> <a name="private_key_pem_input" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCert.property.privateKeyPemInput"></a>

```python
private_key_pem_input: str
```

- *Type:* str

---

##### `set_authority_key_id_input`<sup>Optional</sup> <a name="set_authority_key_id_input" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCert.property.setAuthorityKeyIdInput"></a>

```python
set_authority_key_id_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `set_subject_key_id_input`<sup>Optional</sup> <a name="set_subject_key_id_input" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCert.property.setSubjectKeyIdInput"></a>

```python
set_subject_key_id_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `subject_input`<sup>Optional</sup> <a name="subject_input" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCert.property.subjectInput"></a>

```python
subject_input: typing.Union[IResolvable, typing.List[SelfSignedCertSubject]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCertSubject">SelfSignedCertSubject</a>]]

---

##### `uris_input`<sup>Optional</sup> <a name="uris_input" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCert.property.urisInput"></a>

```python
uris_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `validity_period_hours_input`<sup>Optional</sup> <a name="validity_period_hours_input" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCert.property.validityPeriodHoursInput"></a>

```python
validity_period_hours_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `allowed_uses`<sup>Required</sup> <a name="allowed_uses" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCert.property.allowedUses"></a>

```python
allowed_uses: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `dns_names`<sup>Required</sup> <a name="dns_names" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCert.property.dnsNames"></a>

```python
dns_names: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `early_renewal_hours`<sup>Required</sup> <a name="early_renewal_hours" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCert.property.earlyRenewalHours"></a>

```python
early_renewal_hours: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `ip_addresses`<sup>Required</sup> <a name="ip_addresses" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCert.property.ipAddresses"></a>

```python
ip_addresses: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `is_ca_certificate`<sup>Required</sup> <a name="is_ca_certificate" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCert.property.isCaCertificate"></a>

```python
is_ca_certificate: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `private_key_pem`<sup>Required</sup> <a name="private_key_pem" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCert.property.privateKeyPem"></a>

```python
private_key_pem: str
```

- *Type:* str

---

##### `set_authority_key_id`<sup>Required</sup> <a name="set_authority_key_id" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCert.property.setAuthorityKeyId"></a>

```python
set_authority_key_id: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `set_subject_key_id`<sup>Required</sup> <a name="set_subject_key_id" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCert.property.setSubjectKeyId"></a>

```python
set_subject_key_id: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `uris`<sup>Required</sup> <a name="uris" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCert.property.uris"></a>

```python
uris: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `validity_period_hours`<sup>Required</sup> <a name="validity_period_hours" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCert.property.validityPeriodHours"></a>

```python
validity_period_hours: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCert.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCert.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### SelfSignedCertConfig <a name="SelfSignedCertConfig" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCertConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCertConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_tls import self_signed_cert

selfSignedCert.SelfSignedCertConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  allowed_uses: typing.List[str],
  private_key_pem: str,
  validity_period_hours: typing.Union[int, float],
  dns_names: typing.List[str] = None,
  early_renewal_hours: typing.Union[int, float] = None,
  ip_addresses: typing.List[str] = None,
  is_ca_certificate: typing.Union[bool, IResolvable] = None,
  set_authority_key_id: typing.Union[bool, IResolvable] = None,
  set_subject_key_id: typing.Union[bool, IResolvable] = None,
  subject: typing.Union[IResolvable, typing.List[SelfSignedCertSubject]] = None,
  uris: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCertConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCertConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCertConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCertConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCertConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCertConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCertConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCertConfig.property.allowedUses">allowed_uses</a></code> | <code>typing.List[str]</code> | List of key usages allowed for the issued certificate. |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCertConfig.property.privateKeyPem">private_key_pem</a></code> | <code>str</code> | Private key in [PEM (RFC 1421)](https://datatracker.ietf.org/doc/html/rfc1421) format, that the certificate will belong to. This can be read from a separate file using the [`file`](https://www.terraform.io/language/functions/file) interpolation function. |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCertConfig.property.validityPeriodHours">validity_period_hours</a></code> | <code>typing.Union[int, float]</code> | Number of hours, after initial issuing, that the certificate will remain valid for. |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCertConfig.property.dnsNames">dns_names</a></code> | <code>typing.List[str]</code> | List of DNS names for which a certificate is being requested (i.e. certificate subjects). |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCertConfig.property.earlyRenewalHours">early_renewal_hours</a></code> | <code>typing.Union[int, float]</code> | The resource will consider the certificate to have expired the given number of hours before its actual expiry time. |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCertConfig.property.ipAddresses">ip_addresses</a></code> | <code>typing.List[str]</code> | List of IP addresses for which a certificate is being requested (i.e. certificate subjects). |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCertConfig.property.isCaCertificate">is_ca_certificate</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Is the generated certificate representing a Certificate Authority (CA) (default: `false`). |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCertConfig.property.setAuthorityKeyId">set_authority_key_id</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Should the generated certificate include an [authority key identifier](https://datatracker.ietf.org/doc/html/rfc5280#section-4.2.1.1): for self-signed certificates this is the same value as the [subject key identifier](https://datatracker.ietf.org/doc/html/rfc5280#section-4.2.1.2) (default: `false`). |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCertConfig.property.setSubjectKeyId">set_subject_key_id</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Should the generated certificate include a [subject key identifier](https://datatracker.ietf.org/doc/html/rfc5280#section-4.2.1.2) (default: `false`). |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCertConfig.property.subject">subject</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCertSubject">SelfSignedCertSubject</a>]]</code> | subject block. |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCertConfig.property.uris">uris</a></code> | <code>typing.List[str]</code> | List of URIs for which a certificate is being requested (i.e. certificate subjects). |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCertConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCertConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCertConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCertConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCertConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCertConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCertConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `allowed_uses`<sup>Required</sup> <a name="allowed_uses" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCertConfig.property.allowedUses"></a>

```python
allowed_uses: typing.List[str]
```

- *Type:* typing.List[str]

List of key usages allowed for the issued certificate.

Values are defined in [RFC 5280](https://datatracker.ietf.org/doc/html/rfc5280) and combine flags defined by both [Key Usages](https://datatracker.ietf.org/doc/html/rfc5280#section-4.2.1.3) and [Extended Key Usages](https://datatracker.ietf.org/doc/html/rfc5280#section-4.2.1.12). Accepted values: `any_extended`, `cert_signing`, `client_auth`, `code_signing`, `content_commitment`, `crl_signing`, `data_encipherment`, `decipher_only`, `digital_signature`, `email_protection`, `encipher_only`, `ipsec_end_system`, `ipsec_tunnel`, `ipsec_user`, `key_agreement`, `key_encipherment`, `microsoft_commercial_code_signing`, `microsoft_kernel_code_signing`, `microsoft_server_gated_crypto`, `netscape_server_gated_crypto`, `ocsp_signing`, `server_auth`, `timestamping`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tls/4.0.5/docs/resources/self_signed_cert#allowed_uses SelfSignedCert#allowed_uses}

---

##### `private_key_pem`<sup>Required</sup> <a name="private_key_pem" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCertConfig.property.privateKeyPem"></a>

```python
private_key_pem: str
```

- *Type:* str

Private key in [PEM (RFC 1421)](https://datatracker.ietf.org/doc/html/rfc1421) format, that the certificate will belong to. This can be read from a separate file using the [`file`](https://www.terraform.io/language/functions/file) interpolation function.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tls/4.0.5/docs/resources/self_signed_cert#private_key_pem SelfSignedCert#private_key_pem}

---

##### `validity_period_hours`<sup>Required</sup> <a name="validity_period_hours" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCertConfig.property.validityPeriodHours"></a>

```python
validity_period_hours: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Number of hours, after initial issuing, that the certificate will remain valid for.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tls/4.0.5/docs/resources/self_signed_cert#validity_period_hours SelfSignedCert#validity_period_hours}

---

##### `dns_names`<sup>Optional</sup> <a name="dns_names" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCertConfig.property.dnsNames"></a>

```python
dns_names: typing.List[str]
```

- *Type:* typing.List[str]

List of DNS names for which a certificate is being requested (i.e. certificate subjects).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tls/4.0.5/docs/resources/self_signed_cert#dns_names SelfSignedCert#dns_names}

---

##### `early_renewal_hours`<sup>Optional</sup> <a name="early_renewal_hours" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCertConfig.property.earlyRenewalHours"></a>

```python
early_renewal_hours: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The resource will consider the certificate to have expired the given number of hours before its actual expiry time.

This can be useful to deploy an updated certificate in advance of the expiration of the current certificate. However, the old certificate remains valid until its true expiration time, since this resource does not (and cannot) support certificate revocation. Also, this advance update can only be performed should the Terraform configuration be applied during the early renewal period. (default: `0`)

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tls/4.0.5/docs/resources/self_signed_cert#early_renewal_hours SelfSignedCert#early_renewal_hours}

---

##### `ip_addresses`<sup>Optional</sup> <a name="ip_addresses" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCertConfig.property.ipAddresses"></a>

```python
ip_addresses: typing.List[str]
```

- *Type:* typing.List[str]

List of IP addresses for which a certificate is being requested (i.e. certificate subjects).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tls/4.0.5/docs/resources/self_signed_cert#ip_addresses SelfSignedCert#ip_addresses}

---

##### `is_ca_certificate`<sup>Optional</sup> <a name="is_ca_certificate" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCertConfig.property.isCaCertificate"></a>

```python
is_ca_certificate: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Is the generated certificate representing a Certificate Authority (CA) (default: `false`).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tls/4.0.5/docs/resources/self_signed_cert#is_ca_certificate SelfSignedCert#is_ca_certificate}

---

##### `set_authority_key_id`<sup>Optional</sup> <a name="set_authority_key_id" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCertConfig.property.setAuthorityKeyId"></a>

```python
set_authority_key_id: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Should the generated certificate include an [authority key identifier](https://datatracker.ietf.org/doc/html/rfc5280#section-4.2.1.1): for self-signed certificates this is the same value as the [subject key identifier](https://datatracker.ietf.org/doc/html/rfc5280#section-4.2.1.2) (default: `false`).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tls/4.0.5/docs/resources/self_signed_cert#set_authority_key_id SelfSignedCert#set_authority_key_id}

---

##### `set_subject_key_id`<sup>Optional</sup> <a name="set_subject_key_id" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCertConfig.property.setSubjectKeyId"></a>

```python
set_subject_key_id: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Should the generated certificate include a [subject key identifier](https://datatracker.ietf.org/doc/html/rfc5280#section-4.2.1.2) (default: `false`).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tls/4.0.5/docs/resources/self_signed_cert#set_subject_key_id SelfSignedCert#set_subject_key_id}

---

##### `subject`<sup>Optional</sup> <a name="subject" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCertConfig.property.subject"></a>

```python
subject: typing.Union[IResolvable, typing.List[SelfSignedCertSubject]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCertSubject">SelfSignedCertSubject</a>]]

subject block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tls/4.0.5/docs/resources/self_signed_cert#subject SelfSignedCert#subject}

---

##### `uris`<sup>Optional</sup> <a name="uris" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCertConfig.property.uris"></a>

```python
uris: typing.List[str]
```

- *Type:* typing.List[str]

List of URIs for which a certificate is being requested (i.e. certificate subjects).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tls/4.0.5/docs/resources/self_signed_cert#uris SelfSignedCert#uris}

---

### SelfSignedCertSubject <a name="SelfSignedCertSubject" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCertSubject"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCertSubject.Initializer"></a>

```python
from cdktf_cdktf_provider_tls import self_signed_cert

selfSignedCert.SelfSignedCertSubject(
  common_name: str = None,
  country: str = None,
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
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCertSubject.property.commonName">common_name</a></code> | <code>str</code> | Distinguished name: `CN`. |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCertSubject.property.country">country</a></code> | <code>str</code> | Distinguished name: `C`. |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCertSubject.property.locality">locality</a></code> | <code>str</code> | Distinguished name: `L`. |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCertSubject.property.organization">organization</a></code> | <code>str</code> | Distinguished name: `O`. |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCertSubject.property.organizationalUnit">organizational_unit</a></code> | <code>str</code> | Distinguished name: `OU`. |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCertSubject.property.postalCode">postal_code</a></code> | <code>str</code> | Distinguished name: `PC`. |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCertSubject.property.province">province</a></code> | <code>str</code> | Distinguished name: `ST`. |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCertSubject.property.serialNumber">serial_number</a></code> | <code>str</code> | Distinguished name: `SERIALNUMBER`. |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCertSubject.property.streetAddress">street_address</a></code> | <code>typing.List[str]</code> | Distinguished name: `STREET`. |

---

##### `common_name`<sup>Optional</sup> <a name="common_name" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCertSubject.property.commonName"></a>

```python
common_name: str
```

- *Type:* str

Distinguished name: `CN`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tls/4.0.5/docs/resources/self_signed_cert#common_name SelfSignedCert#common_name}

---

##### `country`<sup>Optional</sup> <a name="country" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCertSubject.property.country"></a>

```python
country: str
```

- *Type:* str

Distinguished name: `C`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tls/4.0.5/docs/resources/self_signed_cert#country SelfSignedCert#country}

---

##### `locality`<sup>Optional</sup> <a name="locality" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCertSubject.property.locality"></a>

```python
locality: str
```

- *Type:* str

Distinguished name: `L`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tls/4.0.5/docs/resources/self_signed_cert#locality SelfSignedCert#locality}

---

##### `organization`<sup>Optional</sup> <a name="organization" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCertSubject.property.organization"></a>

```python
organization: str
```

- *Type:* str

Distinguished name: `O`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tls/4.0.5/docs/resources/self_signed_cert#organization SelfSignedCert#organization}

---

##### `organizational_unit`<sup>Optional</sup> <a name="organizational_unit" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCertSubject.property.organizationalUnit"></a>

```python
organizational_unit: str
```

- *Type:* str

Distinguished name: `OU`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tls/4.0.5/docs/resources/self_signed_cert#organizational_unit SelfSignedCert#organizational_unit}

---

##### `postal_code`<sup>Optional</sup> <a name="postal_code" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCertSubject.property.postalCode"></a>

```python
postal_code: str
```

- *Type:* str

Distinguished name: `PC`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tls/4.0.5/docs/resources/self_signed_cert#postal_code SelfSignedCert#postal_code}

---

##### `province`<sup>Optional</sup> <a name="province" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCertSubject.property.province"></a>

```python
province: str
```

- *Type:* str

Distinguished name: `ST`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tls/4.0.5/docs/resources/self_signed_cert#province SelfSignedCert#province}

---

##### `serial_number`<sup>Optional</sup> <a name="serial_number" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCertSubject.property.serialNumber"></a>

```python
serial_number: str
```

- *Type:* str

Distinguished name: `SERIALNUMBER`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tls/4.0.5/docs/resources/self_signed_cert#serial_number SelfSignedCert#serial_number}

---

##### `street_address`<sup>Optional</sup> <a name="street_address" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCertSubject.property.streetAddress"></a>

```python
street_address: typing.List[str]
```

- *Type:* typing.List[str]

Distinguished name: `STREET`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tls/4.0.5/docs/resources/self_signed_cert#street_address SelfSignedCert#street_address}

---

## Classes <a name="Classes" id="Classes"></a>

### SelfSignedCertSubjectList <a name="SelfSignedCertSubjectList" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCertSubjectList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCertSubjectList.Initializer"></a>

```python
from cdktf_cdktf_provider_tls import self_signed_cert

selfSignedCert.SelfSignedCertSubjectList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCertSubjectList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCertSubjectList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCertSubjectList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCertSubjectList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCertSubjectList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCertSubjectList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCertSubjectList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCertSubjectList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCertSubjectList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCertSubjectList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCertSubjectList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCertSubjectList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCertSubjectList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCertSubjectList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCertSubjectList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> SelfSignedCertSubjectOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCertSubjectList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCertSubjectList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCertSubjectList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCertSubjectList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCertSubject">SelfSignedCertSubject</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCertSubjectList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCertSubjectList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCertSubjectList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[SelfSignedCertSubject]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCertSubject">SelfSignedCertSubject</a>]]

---


### SelfSignedCertSubjectOutputReference <a name="SelfSignedCertSubjectOutputReference" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCertSubjectOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCertSubjectOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_tls import self_signed_cert

selfSignedCert.SelfSignedCertSubjectOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCertSubjectOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCertSubjectOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCertSubjectOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCertSubjectOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCertSubjectOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCertSubjectOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCertSubjectOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCertSubjectOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCertSubjectOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCertSubjectOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCertSubjectOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCertSubjectOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCertSubjectOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCertSubjectOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCertSubjectOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCertSubjectOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCertSubjectOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCertSubjectOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCertSubjectOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCertSubjectOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCertSubjectOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCertSubjectOutputReference.resetCommonName">reset_common_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCertSubjectOutputReference.resetCountry">reset_country</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCertSubjectOutputReference.resetLocality">reset_locality</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCertSubjectOutputReference.resetOrganization">reset_organization</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCertSubjectOutputReference.resetOrganizationalUnit">reset_organizational_unit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCertSubjectOutputReference.resetPostalCode">reset_postal_code</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCertSubjectOutputReference.resetProvince">reset_province</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCertSubjectOutputReference.resetSerialNumber">reset_serial_number</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCertSubjectOutputReference.resetStreetAddress">reset_street_address</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCertSubjectOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCertSubjectOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCertSubjectOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCertSubjectOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCertSubjectOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCertSubjectOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCertSubjectOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCertSubjectOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCertSubjectOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCertSubjectOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCertSubjectOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCertSubjectOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCertSubjectOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCertSubjectOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCertSubjectOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCertSubjectOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCertSubjectOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCertSubjectOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCertSubjectOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCertSubjectOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCertSubjectOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCertSubjectOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCertSubjectOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCertSubjectOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_common_name` <a name="reset_common_name" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCertSubjectOutputReference.resetCommonName"></a>

```python
def reset_common_name() -> None
```

##### `reset_country` <a name="reset_country" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCertSubjectOutputReference.resetCountry"></a>

```python
def reset_country() -> None
```

##### `reset_locality` <a name="reset_locality" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCertSubjectOutputReference.resetLocality"></a>

```python
def reset_locality() -> None
```

##### `reset_organization` <a name="reset_organization" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCertSubjectOutputReference.resetOrganization"></a>

```python
def reset_organization() -> None
```

##### `reset_organizational_unit` <a name="reset_organizational_unit" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCertSubjectOutputReference.resetOrganizationalUnit"></a>

```python
def reset_organizational_unit() -> None
```

##### `reset_postal_code` <a name="reset_postal_code" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCertSubjectOutputReference.resetPostalCode"></a>

```python
def reset_postal_code() -> None
```

##### `reset_province` <a name="reset_province" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCertSubjectOutputReference.resetProvince"></a>

```python
def reset_province() -> None
```

##### `reset_serial_number` <a name="reset_serial_number" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCertSubjectOutputReference.resetSerialNumber"></a>

```python
def reset_serial_number() -> None
```

##### `reset_street_address` <a name="reset_street_address" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCertSubjectOutputReference.resetStreetAddress"></a>

```python
def reset_street_address() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCertSubjectOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCertSubjectOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCertSubjectOutputReference.property.commonNameInput">common_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCertSubjectOutputReference.property.countryInput">country_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCertSubjectOutputReference.property.localityInput">locality_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCertSubjectOutputReference.property.organizationalUnitInput">organizational_unit_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCertSubjectOutputReference.property.organizationInput">organization_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCertSubjectOutputReference.property.postalCodeInput">postal_code_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCertSubjectOutputReference.property.provinceInput">province_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCertSubjectOutputReference.property.serialNumberInput">serial_number_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCertSubjectOutputReference.property.streetAddressInput">street_address_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCertSubjectOutputReference.property.commonName">common_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCertSubjectOutputReference.property.country">country</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCertSubjectOutputReference.property.locality">locality</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCertSubjectOutputReference.property.organization">organization</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCertSubjectOutputReference.property.organizationalUnit">organizational_unit</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCertSubjectOutputReference.property.postalCode">postal_code</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCertSubjectOutputReference.property.province">province</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCertSubjectOutputReference.property.serialNumber">serial_number</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCertSubjectOutputReference.property.streetAddress">street_address</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCertSubjectOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCertSubject">SelfSignedCertSubject</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCertSubjectOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCertSubjectOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `common_name_input`<sup>Optional</sup> <a name="common_name_input" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCertSubjectOutputReference.property.commonNameInput"></a>

```python
common_name_input: str
```

- *Type:* str

---

##### `country_input`<sup>Optional</sup> <a name="country_input" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCertSubjectOutputReference.property.countryInput"></a>

```python
country_input: str
```

- *Type:* str

---

##### `locality_input`<sup>Optional</sup> <a name="locality_input" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCertSubjectOutputReference.property.localityInput"></a>

```python
locality_input: str
```

- *Type:* str

---

##### `organizational_unit_input`<sup>Optional</sup> <a name="organizational_unit_input" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCertSubjectOutputReference.property.organizationalUnitInput"></a>

```python
organizational_unit_input: str
```

- *Type:* str

---

##### `organization_input`<sup>Optional</sup> <a name="organization_input" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCertSubjectOutputReference.property.organizationInput"></a>

```python
organization_input: str
```

- *Type:* str

---

##### `postal_code_input`<sup>Optional</sup> <a name="postal_code_input" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCertSubjectOutputReference.property.postalCodeInput"></a>

```python
postal_code_input: str
```

- *Type:* str

---

##### `province_input`<sup>Optional</sup> <a name="province_input" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCertSubjectOutputReference.property.provinceInput"></a>

```python
province_input: str
```

- *Type:* str

---

##### `serial_number_input`<sup>Optional</sup> <a name="serial_number_input" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCertSubjectOutputReference.property.serialNumberInput"></a>

```python
serial_number_input: str
```

- *Type:* str

---

##### `street_address_input`<sup>Optional</sup> <a name="street_address_input" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCertSubjectOutputReference.property.streetAddressInput"></a>

```python
street_address_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `common_name`<sup>Required</sup> <a name="common_name" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCertSubjectOutputReference.property.commonName"></a>

```python
common_name: str
```

- *Type:* str

---

##### `country`<sup>Required</sup> <a name="country" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCertSubjectOutputReference.property.country"></a>

```python
country: str
```

- *Type:* str

---

##### `locality`<sup>Required</sup> <a name="locality" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCertSubjectOutputReference.property.locality"></a>

```python
locality: str
```

- *Type:* str

---

##### `organization`<sup>Required</sup> <a name="organization" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCertSubjectOutputReference.property.organization"></a>

```python
organization: str
```

- *Type:* str

---

##### `organizational_unit`<sup>Required</sup> <a name="organizational_unit" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCertSubjectOutputReference.property.organizationalUnit"></a>

```python
organizational_unit: str
```

- *Type:* str

---

##### `postal_code`<sup>Required</sup> <a name="postal_code" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCertSubjectOutputReference.property.postalCode"></a>

```python
postal_code: str
```

- *Type:* str

---

##### `province`<sup>Required</sup> <a name="province" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCertSubjectOutputReference.property.province"></a>

```python
province: str
```

- *Type:* str

---

##### `serial_number`<sup>Required</sup> <a name="serial_number" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCertSubjectOutputReference.property.serialNumber"></a>

```python
serial_number: str
```

- *Type:* str

---

##### `street_address`<sup>Required</sup> <a name="street_address" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCertSubjectOutputReference.property.streetAddress"></a>

```python
street_address: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCertSubjectOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, SelfSignedCertSubject]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCertSubject">SelfSignedCertSubject</a>]

---



